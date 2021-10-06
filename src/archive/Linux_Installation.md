## Serial console

If the machine is only providing serial output during bootup, then it
may not have been configured for serial logins. Check that the
`/etc/inittab` file contains a line like

    T0:23:respawn:/sbin/getty -L ttyS0 9600 vt100

which tells init to start the program to provide login prompts.

The original kernel shipped with Debian sarge has a broken serial driver
for Ultra 5s. The version in the security updates should work.

## Restricting access to admins

In `/etc/security/access.conf` add

    +:ALL:cron
    -:ALL EXCEPT root admin:ALL

\[Hmmm... maybe that should be `LOCAL` instead of `cron`.\]

Ensure that `/etc/pam.d/common-account` ensure that the pam_access
module is used to restrict access. For example,

    account [success=1 default=ignore]      pam_unix.so debug
    account required                        pam_ldap.so debug
    account required                        pam_access.so

## Multiple VLANs

Some systems need to appear on several VLANs, most notably the router.
First, add

    8021q

to the end of `/etc/modules` so that the kernel knows how to deal with
the VLAN tagged packets. (Use `modprobe 8021q` to load it immediately if
you don't want to reboot.) Then install the `vlan` Debian package, and
add extra stanzas to `/etc/network/interfaces` for the new VLANs. For
example,

    # Admin VLAN
    auto eth0.1
    iface eth0.1 inet static
            address 192.168.1.6
            netmask 255.255.255.0
            network 192.168.1.0
            broadcast 192.168.1.255

where `eth0.1` means VLAN number `1` on interface `eth0`. Finally,
configure the switch so that the port is on the extra VLANs.

Some ethernet hardware does not like the slightly larger ethernet frames
used by VLAN tagging. We have already had problems with
[sunhme](http://osdir.com/ml/ports.sparc/2003-07/msg00025.html) and a
four port tulip card. You can test it by sending large pings:

    ping -s 1472 davison.tardis.ed.ac.uk

These will produce a frame that is as large as possible (fragmenting the
ping, if necessary). If the hardware or driver does not support large
frames properly then that frame may be lost. If you are curious about
which direction is failing, you can check with wireshark (`tshark`) or
tcpdump.

We have had success with a 3c905 PCI card, and the old 10Mb/s subqe
interfaces.

## Logging to the [Log host](Log_host "wikilink")

To make **syslog** send logs to the log host, put

    *.*     @loghost

into `/etc/syslog.conf`. To make **rsyslog** send logs to the log host,
put

    $template sysklogd,"<%PRI%>%TIMESTAMP% %syslogtag%%msg%"
    *.* @loghost;sysklogd

into `/etc/rsyslog.conf`. (At least until we change the syslogd on the
loghost.)

It is a good idea to keep the local logging too, in case of network
problems.

## Email config

Install the exim4 package and execute 'dpkg-reconfigure exim4-config' to
configure it with the details below:

    Split configuration into small files:                      NO
    General type of mail configuration:                        mail sent by smarthost; no local mail
    System mail name:                                          HOSTNAME.tardis.ed.ac.uk
    IP-addresses to listen on for incoming SMTP connections:   127.0.0.1
    Other destinations for which mail is accepted:             HOSTNAME.tardis.ed.ac.uk
    Visible domain name for local users:                       tardis.ed.ac.uk
    IP address or host name of the outgoing smarthost:         mailhost.tardis.ed.ac.uk
    Keep number of DNS-queries minimal (Dial-on-Demand):       NO

## Email client config

Email clients need to be told to look in `~/Maildir`.

For mutt on Debian you can create a file `/etc/Muttrc.d/tardis.rc`
(creating the directory if it isn't already there) containing:

    # On Tardis we deliver here by default
    set spoolfile='~/Maildir'

## NTP

Our router, `davison`, provides other machine with an NTP service. In
turn, it synchronises with the (external-facing) Informatics servers.
Here's how to update '/etc/ntp.conf':

    --- /etc/ntp.conf       (revision 17)
    +++ /etc/ntp.conf       (working copy)
    @@ -10,17 +10,8 @@


     # You do need to talk to an NTP server or two (or three).
    -#server ntp.your-provider.example
    +server router.tardis.ed.ac.uk

    -# pool.ntp.org maps to more than 300 low-stratum NTP servers.
    -# Your server will pick a different set every time it starts up.
    -#  *** Please consider joining the pool! ***
    -#  *** <http://www.pool.ntp.org/join.html> ***
    -server 0.debian.pool.ntp.org iburst
    -server 1.debian.pool.ntp.org iburst
    -server 2.debian.pool.ntp.org iburst
    -server 3.debian.pool.ntp.org iburst
    -
     # By default, exchange time with everybody, but don't allow configuration.
     # See /usr/share/doc/ntp-doc/html/accopt.html for details.
     restrict -4 default kod notrap nomodify nopeer noquery

## Munin

Install munin-node on the client (the new Linux box) and update
'/etc/munin/munin-node.conf' like so:

    --- etc/munin/munin-node.conf   (revision 28)
    +++ etc/munin/munin-node.conf   (working copy)
    @@ -34,4 +34,4 @@
     # the allow line as many times as you'd like

     allow ^127\.0\.0\.1$
    -
    +allow ^193.62.81.11$

Then run '/etc/init.d/munin-node restart' to update the daemon. Connect
to the web server and update '/etc/munin/munin.conf' like so:

    --- munin.conf.pert     2007-06-22 17:47:27.593900598 +0100
    +++ munin.conf  2007-06-22 17:48:26.781493093 +0100
    @@ -101,9 +101,11 @@
     [mara.tardis.ed.ac.uk]
         address 193.62.81.15
         use_node_name yes

    -
    +[wotan.tardis.ed.ac.uk]
    +    address 193.62.81.4
    +    use_node_name yes

## Server addresses

## See also

-   [Updating Systems](Updating_Systems "wikilink")
-   [Log host](Log_host "wikilink")

## Other stuff that should be documented here, but isn't

-   Configuring machines to pass mail on to the mail hub
-   Configuring ntp
-   Booting our suns from the LAN
-   Installing munin

[category:infrastructure](category:infrastructure "wikilink")

[Category:OutOfDate](Category:OutOfDate "wikilink")
[Category:Admin_Documents](Category:Admin_Documents "wikilink")