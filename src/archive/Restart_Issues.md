Things which break when tardis restarts....

## Autoboot

A bunch of the machines are not set to autoboot. We should fix this, but
until we do, log into davison, and...

    telnet spiderport <n>

where N is the last octet of the ip of the machine. Hit enter, and if
you get an `ok` prompt, type `boot` to start the machine up. See the
[spiderport](spiderport "wikilink") page for the line configurations.

### Affected Machines

-   mccoy (For good reason, best to wait until LDAP and NFS are up
    before booting)
-   peri (For no good reason, it's just DB)
-   davros (Should wait for LDAP before booting)
-   reaper (No good reason, other than being a bit broken generally)
-   Others?

## Spiderport

If the Spiderport powercycles, it will probably send a break to all the
machines. Repeat the above procedure for all the machines, except type
`go` instead of boot at the `ok` prompt.

### Temporary Fix

If the spiderport sends a break to davison, you'll be locked out and
unable to fix it. You need crossover a laptop into its network port and
resume davison:

`  laptop# ifconfig eth0 192.168.1.1 netmask 255.255.255.0`
`  laptop# telnet 192.168.1.3 1`
`  Trying 192.168.1.3...`
`  Connected to 192.168.1.3`
`  Escape character is '^]'.`
`  --- TARDIS SpiderPort ---`

Hit enter to see if you get an `ok>` prompt, then type `go`, and press
enter a few more times. Should get you back to a login prompt (or not).
`<ctrl+]>` then `quit` at the `telnet>` prompt will get you out of
telnet.

## NFS mounts

Wait for everything to come up, and

    sudo mount -a

on mccoy and gallifrey.

## Firewall

From a cold boot, the firewall defaults to 'safe' mode, ie it does not
route for the rest of tardis. You need to log in from the outside (sshd
on port 2222) and run the firewall script, as follows:

Login to davison (as root), run `/root/tardis-firewall`. You have 2
minutes to test that everything is ok, ie, you can login remotely, and
then `atrm `<jobid>, as sugggested.

### Issues

If the outside network isn't working on startup, we potentially don't
advertise our routes to the rest of the world (eg `traceroute` to
`router.tardis` works, but `davison.tardis` gets lost somewhere in
London). Restarting davison seems to fix this, but there's probably an
easier way.

## Time

The clock on [piper](piper "wikilink") drifts quickly when the machine
is off, and ntpd will refuse to resychronise unless the time is set
manually with `/etc/init.d/ntpdate start`.

[Category:OutOfDate](Category:OutOfDate "wikilink") [Category:Admin
Documents](Category:Admin_Documents "wikilink")