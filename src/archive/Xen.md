*Work in progress. -- Thom 17/12/09*

## Overview

-   We currently have two Xen hosts: [WOTAN](WOTAN "wikilink") and
    [Oracle](Oracle "wikilink").

## Creating new Xen instances

#### Naming your host

-   Think of a name. We like Dr Who themed names! If you recycle a name
    you'll probably upset Thom -- why not ask Malcolm for advice?
-   At this point you should also create a wiki page explaining your
    VM's purpose and config. Use one of the other Xen machines' pages as
    a starting point.
-   Find a free IP and add forward and reverse mappings to the
    [DNS](DNS_Service "wikilink").

#### Find a Xen host

-   Our main constraints on Xen hosts are RAM and disk space.
-   Use `vgs` to show free disk space in the volume group
-   Check amount of RAM allocated to dom0 in `xentop` for a poor
    estimation of potentially free RAM.

#### Create disk volumes

-   Create root volume:
    `lvcreate -L 4GB -n `<hostname>`-root `<volume-group>
    -   2GB is just about enough for a Debian install.
    -   You can find out the volume group name with `vgs`
-   Create swap volume:
    `lvcreate -L 256MB -n `<hostname>`-swap `<volume-group>
    -   Use your favourite rule of thumb for guessing a completely
        arbitrary quantity of swap space to allocate. If your machine
        starts thrashing you'll probably upset someone, so it's better
        off being small.

#### Create Xen configuration file

Combine the following config, as customized to your specifications, with
the Debian xen installer config file
[1](http://ftp.debian.org/debian/dists/lenny/main/installer-i386/current/images/netboot/xen/xm-debian.cfg).

Put the new config file in `/etc/xen/`<hostname>`.conf`

*Note. The IP bit is possibly redundant. Replace with blank string?*

    memory = <amount of memory in MB>
    name = "<host-name>"
    vif = ['ip=<ip>']
    disk = [ 'phy:/dev/<volume-group>/<host-name>-root,xvda,w',
             'phy:/dev/<volume-group>/<host-name>-swap,xvdb,w' ]

    #============================================================================
    # Debian Installer specific variables
    <<<INSERT REST OF DEBIAN XEN CONFIG FILE HERE>>>

#### Install Debian

-   There's probably a way to get the installer to load via an HTTP
    proxy, but I'm lazy so I just punch a temporary hole in the
    firewall:
    -   `ace:~# iptables -I FORWARD -s oracle -d ftp.uk.debian.org -j ACCEPT`
-   Start the installer
    -   `xm create -c ukairo.conf install=true install-mirror=`[`ftp://ftp.uk.debian.org/debian`](ftp://ftp.uk.debian.org/debian)

<!-- -->

-   Exciting installer notes!
    -   DHCP got an address the first time round. It probably shouldn't
        have. Configure manually if you get the chance.
        -   Gateway is `.1`, DNS is `.14`.
    -   Configure the proxy as
        [`http://free.cache.ed.ac.uk:3128`](http://free.cache.ed.ac.uk:3128)
    -   Partition manually. The installer gets confused otherwise
    -   Be careful not to select "Desktop" in tasksel!
        -   Also this doesn't pull in openssh-server, and makes things
            depend on X. This is bad. FIXME
    -   Bootloader... WTF. FIXME.

<!-- -->

-   Unbreak the firewall.
    -   `ace:~# iptables -D FORWARD -s oracle -d ftp.uk.debian.org -j ACCEPT`

#### Booting your instance

-   Remove the Debian installer cruft from the config file.
-   Add kernel=, initrd=, and root= entries
    -   There's probably a better way to do this, as this means we're
        missing modules... FIXME
-   `xm create -c `<newmachinename>`.conf>`
    -   Will boot instance and attach to console. Check you can log in.
    -   Use ctrl+\] to get back to the Xen host console.

#### Finishing up

-   Congratulations, you now have a new Xen domU!

## Booting and Shutting Down

Xen's init scripts are set up to perform an \`xm save\` (copy the RAM to
disk) for each domU that's running when vislor and/or adric are shut
down and to restore saved domUs on boot. This should take care of the
cases where tardis is shut down intentionally, but a bit more work will
have to be done following an unexpected power loss. (When do they happen
anyway? ;-)

To start all domUs on vislor do:

`for foo in /etc/xen/*.conf; do xm create -c $foo; done`
<WAIT FOR A LOGIN PROMPT>
`ctrl+]`
<WAIT FOR A LOGIN PROMPT>
`ctrl+]`
`....`

[category:Services](category:Services "wikilink")
[category:Infrastructure](category:Infrastructure "wikilink")

[Category:OutOfDate](Category:OutOfDate "wikilink")