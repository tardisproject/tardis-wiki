## Updating Debian packages

A *quick update* can be done by

    apt-get update
    apt-get upgrade

For general installation, updates, and so on `aptitude` is a good
choice.

### Caveats

Anything that shouldn't be updated? Like stuff with custom patches? Does
apt have a history of clobbering configs or anything?

## cron-apt

We run *cron-apt* to give us warnings via root's email when packages
need to be updated. This should be installed on every box. Here's the
change you need to make to the configuration:

    --- /etc/cron-apt/config.orig   2009-02-25 05:41:42.000000000 +0000
    +++ /etc/cron-apt/config        2009-02-25 05:44:11.000000000 +0000
    @@ -94,7 +94,7 @@
     #       output  (send mail when output is generated)
     #        always  (always send mail)
     #                (else never send mail)
    -# MAILON="error"
    +MAILON="changes"

     # Value: error   (syslog on error runs)
     #       upgrade (when packages is upgraded)

## Updating kernels

    apt-get update
    uname -a                                                                # Figure out which kernel series this machine needs
    apt-cache search kernel-image | grep somethingwhichidentifiestheseries  # Find the latest kernel in the series
    apt-get install kernel-image-latestversion-series
    shutdown -r N

so for example:

    uberjoe@davros:~$ uname -a
    Linux davros 2.6.8-2-sparc64 #1 Fri Jun 10 00:38:40 UTC 2005 sparc64 GNU/Linux
    uberjoe@davros:~$ apt-cache search kernel-image | grep sparc64
    kernel-image-2.6.8-2-sparc64 - Linux kernel binary image for UltraSPARC (sparc64) systems
    kernel-image-2.6.8-3-sparc64 - Linux kernel binary image for UltraSPARC (sparc64) systems
    uberjoe@davros:~$ sudo apt-get install kernel-image-2.6.8-3-sparc64
    boring debian package installation stuff
    uberjoe@davros:~$ sudo vim /etc/silo.conf
    uberjoe@davros:~$ sudo shutdown -r now

Silo should be set up to load the new kernel magically. If not, some
haxing may be required to get the new kernel to work. It's probably best
to try and set it up like so:

    root=/dev/hda2
    partition=1
    default=debian
    read-only
    timeout=100

    image=/boot/vmlinuz
            label=debian
            append="UDEV_DISABLED=yes"
            initrd=/boot/initrd.img

    image=/boot/vmlinuz
            label=Linux
            append="UDEV_DISABLED=yes"
            initrd=/boot/initrd.img

    image=/boot/vmlinuz.old
            label=LinuxOLD
            append="UDEV_DISABLED=yes"
            initrd=/boot/initrd.img.old

This is more or less how debian has it set up by default, but with devfs
turned off, because we don't need it. You might want to check which
drive root is on. Debian should update the symlinks in /boot
automagically, and all should be well.

### Caveats

Anything tied to specific kernel versions?

The stock Debian stable kernels have a bug in the serial drivers that
make the console on Ultra 5s unusable. We previously fixed this with a
slightly later version of the package (2.6.8-16), but it looks like the
security update (2.6.8-15sarge1) should have the console fix, along with
a bunch of security fixes. I haven't tested this version yet.

[Category:OutOfDate](Category:OutOfDate "wikilink") [Category:Admin
Documents](Category:Admin_Documents "wikilink")