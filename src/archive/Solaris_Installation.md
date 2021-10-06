## Tardis Solaris Installation/Configuation

A fairly minimal guide to running Solaris on to Tardis systems.

## Installation

### Pre-requisites

-   Computer - wired in, serial consoled, networked
-   Install media (or install jumpstart server)
-   IP address - find something free in appropriate VLAN/subnet
-   Hostname - pick something, have DNS admin add it to the DNS

### Pre-install setup

Attempt to do the following *before* installing the new machine.
Generally you will require someone else to to complete some or all of
these tasks, depending on whether you have/need access to the
Spiderport/Switch/Firewall configuration.

#### Configure spiderport

Login to
[spiderport](http://www.tardis.ed.ac.uk/admin/systems/spiderport.html)
(requires access to admin machine, eg baker or davison) and configure
tcp port *n* to map to the serial port you plugged the new machine into,
where *n* is the last octet of the IP address chosen for the new system.

#### VLAN install

Login to [switch](http://www.tardis.ed.ac.uk/admin/net), map chosen
ethernet port into the approriate VLAN.

#### Firewall configuration

-   Allow outgoing DNS, HTTP Proxy Access (if required).
-   Allow incoming SSH (if required).

### Solaris Install

Put install media in drive.

Connect to the serial console on the new machine (would advise running
this inside a screen session, in case the connection fails and context
is lost). Drop machine to the prom (^\] then send break from the telnet>
prompt), type boot cdrom at the go prompt to begin the interactive
installer program.

Most of the questions in the installer program can be answered with
common sense. Remeber to use <esc>n instead of Fn to progress through
the menus.

#### Responses to non-obvious questions

May not be conclusive, mostly from memory

-   Terminal type - choose 'xterms', it seems to work fine.
-   Install type - choose normal install. Install the whole solaris
    system (minus OEM support). The 'reduced networking support' option
    is much more minimally configured and could also be considered.
-   Disk layout - choose 'auto-layout', the customise. The defaults are
    inappropriate, make / considerably larger, do not have a seperate
    /export partition('slice'), allow for a sensible /var

## Configuration

### DNS

    cp /etc/nsswitch.dns /etc/nsswitch.conf

Then edit /etc/resolv.conf to taste.

### LDAP Client

    ldapclient -v manual -a defaultSearchBase=dc=tardis,dc=ed,dc=ac,dc=uk \
        -a domainName=tardis.ed.ac.uk -a defaultServerList=193.62.81.2

This messes up /etc/nsswitch.conf so you will need to re-add some of the
changes from /etc/nsswitch.dns or even revert to /etc/nsswitch.dns and
just add ldap lookup for passwd and group.

### Environment tweaks

Solaris comes with a fairly alien default configuration, especially if
you come from a GNU tools background. Things you may wish to do:

-   Set the default shell to bash rather than sh (this is safe in S10).
-   Set the default TERM variable to something less 'broken'.
-   Edit /etc/default/login and /etc/default/su setting PATH and SUPATH
    to:

`/opt/csw/bin:/usr/sbin:/usr/bin:/usr/dt/bin:/usr/openwin/bin:/usr/ccs/bin`

-   Export an appropriate $http_proxy variable from /etc/profile.

### 2.2 Package Manager

pkg-get is an apt-ish package manager for Solaris for installing
unofficial community software builds. You can install pkg-get from
[blastwave.org](http://www.blastwave.org/howto.html). Usage is fairly
trivial, eg:

`pkg-get -i vim`

### 2.3 Minimise Network Exposure

*TODO: using svcadm to disable the vast swathes of useless services*

### 2.4 Solaris Zones

See [Zones
FAQ](http://www.opensolaris.org/os/community/zones/faq/#sa_create) on
[opensolaris.org](http://www.opensolaris.org/).

#### 2.4.1 Creating and installing a zone

    reaper:~# zonecfg -z <zonename>
    db: No such zone configured
    Use 'create' to begin configuring a new zone.
    zonecfg:db> create
    zonecfg:db> set zonepath=/zones/zone_roots/<zonename>
    zonecfg:db> add net
    zonecfg:db:net> set address=<zone ip addr>
    zonecfg:db:net> set physical=hme0
    zonecfg:db:net> end
    zonecfg:db> commit
    zonecfg:db> exit

    reaper:~# zoneadm -z <zonename> install
    reaper:~# zoneadm -z <zonename> boot
    reaper:~# zlogin -e] -C <zonename>

Then follow the above guidelines on setting up the Solaris environment.

#### Useful info

##### Connecting to the console on a zone

It is necessary to change the escape char for zlogin, because by default
it is the same as ssh (\~) which will create confusion if you're logged
in through a chain of ssh sessions.

zlogin -e\] -C <zonename>

To disconnect from a zone, first log out, then type \]. after a newline.

##### Adding user accounts

*(you cannot ssh into the root account)*

-   Disable autofs

`svcadm disable svc:/system/filesystem/autofs:default`

-   Fix permissions on /home

`chmod 755 /home`

-   Add account

`useradd -m -d /home/username -s /bin/bash/ username` `passwd username`

*This may all be fixable cleanly by leaving autofs running and following
the instructions in the comments
[here](http://www.oreillynet.com/onlamp/blog/2006/03/solaris_first_install.html).*

[category:Admin_Documents](category:Admin_Documents "wikilink")

[Category:OutOfDate](Category:OutOfDate "wikilink")