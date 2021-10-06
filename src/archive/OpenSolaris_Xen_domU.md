This page describes the installation of the [July 2007 update of
OpenSolaris](http://blogs.sun.com/levon/entry/solaris_xen_update) on a
[Xen](Xen "wikilink") domU running under a Linux dom0. It has all been
written based on my experiences with Debian GNU/Linux 4.0 as the dom0 so
some details might not match your system and others might just be wrong.
If you have any corrections or additions, please email me here:
rupert.hair@ntlworld.com

## Getting the Installation Media

The installer is available as DVD image from Sun's Download Centre
[here](http://www.sun.com/download/products.xml?id=4691b249). It is
distributed as an ISO file, which has been split into six parts and
where each part has been zipped.

I downloaded each file, verified them using the supplied md5sums, and
then ran the following from bash to unzip and recombine them:

    mkdir /usr/lib/xen-solaris/
    for foo in `ls 66-0624-nd-iso-[a-f].zip`; do
        unzip -p $foo;
    done >/usr/lib/xen-solaris/66-0624-nd.iso

## Extracting the Kernel and Initial ramdisk

To boot OpenSolaris under [Xen](Xen "wikilink") you need both a kernel
and initial ramdisk available on your dom0. The
[documentation](http://opensolaris.org/os/community/xen/docs/install-solaris-domu-iso.htm)
seems to assume that you are running an OpenSolaris dom0 and so will
already have a copy of the kernel and ramdisk available. In our case,
with a Linux dom0, we will need to extract the kernel and ramdisk from
the ISO image like so:

    mkdir /mnt/tmp
    mount -o loop,ro 66-0624-nd.iso /mnt/tmp
    cp /mnt/tmp/boot/x86.miniroot /usr/lib/xen-solaris/x86.miniroot-66-0624-nd
    cp /mnt/tmp/boot/platform/i86xpv/kernel/unix /usr/lib/xen-solaris/unix-66-0624-nd
    umount /mnt/tmp

## Configuring Xen for the Installation

Before you can boot OpenSolaris to begin the installation you will need
to create a [Xen](Xen "wikilink") configuration file defining the
virtual disk, virtual DVD drive, kernel, ramdisk, memory size and kernel
parameters. Here's an example:

    name = 'argolin'
    memory = '1024'
    disk = [ 'file:/mnt/tmp/66-0624-nd.iso,6:cdrom,r', 'phy:/dev/xenvg/argolin.disk,0,w' ]
    vif = [ '' ]
    on_shutdown = 'destroy'
    on_reboot = 'destroy'
    on_crash = 'destroy'
    kernel = '/usr/lib/xen-solaris/unix-66-0624-nd'
    ramdisk = '/usr/lib/xen-solaris/x86.miniroot-66-0624-nd'
    extra = '/platform/i86xpv/kernel/unix - nowin -B install_media=cdrom'

This creates a domU called argolin with 1024MB of RAM, a virtual DVD
drive from the image in '/mnt/tmp/66-0624-nd.iso', a virtual disk from
the device '/dev/xenvg/argolin.disk', the default virtual network
interface and the kernel and ramdisk extracted earlier. This
configuration file should be saved in '/etc/xen/' and given a name like
'argolin.conf' but this is up to you.

## SMP-related IO Hang (part 1)

My first tries at booting OpenSolaris as a domU resulted in the
installer hanging at some point during the main package installation
process. After much help from the kind folk of #solaris-xen on
irc.oftc.net we found that this was an IO hang which is only seen on SMP
systems. A work-around for this bug exists in the kernel but has to be
enabled manually using the kernel's built in debugger. The '-kd' kernel
parameter, shown below, causes the kernel to open the debugger as soon
as possible after boot.

    extra = '/platform/i86xpv/kernel/unix -kd - nowin -B install_media=cdrom'

## Booting the Installer

Once you have the DVD image, have extracted the kernel and ramdisk, and
have created the [Xen](Xen "wikilink") configuration file you can boot
the installer like so:

    xm create -c argolin.conf

The last argument to the command is the name of the configuration file
created above.

You should then see:

    Using config file "/etc/xen/argolin.conf".
    Started domain argolin
    SunOS Release 5.11 Version xen-nv66-2007-06-24 32-bit
    Copyright 1983-2007 Sun Microsystems, Inc.  All rights reserved.
    Use is subject to license terms.
    WARNING: Found xen v3.0.3-1 but need xen v3.0.4-1-sun
    WARNING: The kernel may not function correctly
    Configuring /dev
    Solaris Interactive Text (Console session)
    Using install cd in /dev/dsk/c0d6p0
    ...
    ...

The warnings about the Xen version mismatch may be ignored as these
apparently only apply to 64bit systems (thanks again #solaris-xen).

## SMP-related IO Hang (part 2)

Following a boot with the '-kd' parameter you should see the following:

    Using config file "/etc/xen/argolin.conf".
    Started domain argolin
    Loading kmdb...

    Welcome to kmdb
    Loaded modules: [ unix krtld genunix ]
    [0]>

You type:

    workaround_6557577?W 1

It shows:

    workaround_6557577:             0               =       0x1
    [0]>

You type:

    :c

It shows:

    SunOS Release 5.11 Version xen-nv66-2007-06-24 32-bit
    Copyright 1983-2007 Sun Microsystems, Inc.  All rights reserved.
    Use is subject to license terms.
    WARNING: Found xen v3.0.3-1 but need xen v3.0.4-1-sun
    WARNING: The kernel may not function correctly
    Configuring /dev
    ...
    ...

## The Installation

Once OpenSolaris has booted the installer will ask you for details of
your location and terminal. Make sure you are using a standard 80x25
terminal and select option 6 (PC console). You should then see a shiny,
coloured installer. Make sure you say no to the automatic reboot as we
need to transfer the kernel and ramdisk to the dom0 after the install.

## SMP-related IO Hang (part 3)

You'll be glad to hear that this is the last section dealing with the
SMP-related IO hang. To avoid having to use kmdb to enable the
workaround during each boot, I added the following line to
'/etc/system':

    set workaround_6557577 = 1

## TCP/UDP Checksum Problem

I also had a problem with the OpenSolaris kernel not generating
checksums for TCP and UDP packets. The fix for this is another addition
to '/etc/system':

    set xnf:xnf_cksum_offload = 0

## Finishing up and Rebooting into the Installed System

Unfortunately we need to update the ramdisk after editing '/etc/system'
so:

    bootadm update-archive -R /a

As mentioned above, we need to make the OpenSolaris kernel and ramdisk
available inside the dom0. It is not strictly necessary to transfer the
kernel from the domU to the dom0 as it is identical to the installer's
kernel but I have shown the scp for both kernel and ramdisk because this
may be necessary if the kernel is upgraded at a later point. I chose a
full install so that I could use scp to do this but if you have an ftp
server handy you should be OK with a more minimal install. At the
post-install console I did the following:

    /a/usr/bin/scp -S /a/usr/bin/ssh /a/platform/i86xpv/kernel/unix /a/platform/i86pc/boot_archive \
            10.0.0.1:/usr/lib/xen-solaris/

I didn't really know how to shut down the system so I did:

    umount /a
    shutdown -y -g0 -i0

Once back at your dom0's prompt you need to edit the domU's
configuration file to look something like this:

    name = 'argolin'
    memory = '1024'
    disk = [ 'phy:/dev/xenvg/argolin.disk,0,w' ]
    vif = [ '' ]
    on_shutdown = 'destroy'
    on_reboot = 'destroy'
    on_crash = 'destroy'
    kernel = '/usr/lib/xen-solaris/unix'
    ramdisk = '/usr/lib/xen-solaris/boot_archive'
    extra = '/platform/i86xpv/kernel/unix'
    root = '/dev/dsk/c0d0s0'

Then fire up the domU again and you're away:

    xm create -c argolin.conf

    Using config file "/etc/xen/argolin.conf".
    Started domain argolin
    SunOS Release 5.11 Version xen-nv66-2007-06-24 32-bit
    Copyright 1983-2007 Sun Microsystems, Inc.  All rights reserved.
    Use is subject to license terms.
    WARNING: Found xen v3.0.3-1 but need xen v3.0.4-1-sun
    WARNING: The kernel may not function correctly
    ip: joining multicasts failed (4) on xnf0 - will use link layer broadcasts for multicast
    Hostname: argolin.xen.tardis.ed.ac.uk
    ...
    ...
    argolin.xen.tardis.ed.ac.uk console login:

One final note: I was unable to login to the system as root via ssh by
default. I only mention this because most Linux distributions now allow
ssh root login by default.

[category:Admin Documents](category:Admin_Documents "wikilink")

[Category:OutOfDate](Category:OutOfDate "wikilink")