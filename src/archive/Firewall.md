## Here be dragons

Summary: Don't change the firewall configuation. It's not for changing.

In all seriousness, the firewall is pretty much the only bit of Tardis
that absolutely has to be in good working order, for the sake of the
project. If you feel the need to make changes, discuss it with everyone,
especially the people who understand the ramifications (particularly in
regards to the relationship the project has with the powers that be (ie,
Informatics)).

However, if you were (theoretically) going to change it, the
instructions would look roughly as follows...

## Changing the Tardis Firewall

Login to [ace](ace "wikilink") as root. Using [RCS](RCS "wikilink"),
check-out(lock) the firewall script with:

`  co -l tardis-firewall`

The tardis-firewall script is quite complex so take a good look over it
first, it is fairly well documented. Try to make your edits in an
appropriate place.

When you're done, you can deploy your changes by running:

`  ./tardis-firewall`

A bunch of stuff will scroll past, ending in something similar to:

    + echo 'Setting up fail-safe mechanism.  Use '\''atrm <job id>'\'' to stop it.'
    Setting up fail-safe mechanism.  Use 'atrm <job id>' to stop it.
    + at now + 2 minutes
    warning: commands will be executed using /bin/sh
    job 321 at 2006-08-20 12:48
    ace:~#

Pay close attention to the last two lines! The tardis-firewall script
has a failsafe mechanism. You have two minutes to test that your new
configuration is sane. At the very least you should test that:

-   You can ssh into [ace](ace "wikilink") from the outside world..
-   You can ssh into [vortis](vortis "wikilink") from the outside world.

If you're satisfied that you haven't broken anything, do:

`  atrm <job given from script (eg 321 from the above example)>`

to disable the failsafe.

If you fail to atrm the job in time, the firewall ruleset will be
flushed, and routing will be disabled. You will have to log into davison
externally, fix the firewall script, and re-run it.

If you're satisfied your edits do what you want, you can commit(unlock)
the changes in [RCS](RCS "wikilink") with

`  ci -u tardis-firewall`

## IPv6 Firewall

Due to the way that 6to4 tunnels work, 6in4 (protocol 41) traffic to
[ace](ace "wikilink") must be accepted by the IPv4 firewall for the
[IPv6](IPv6 "wikilink") tunnel to work correctly.

IPv6 filtering is controlled by the tardis-IPv6firewall script which
behaves similar to the the tardis-firewall script. The main difference
is that there is no "failsafe" since even if you break this script you
should still have IPv4 access to the machine. Remember to use
[RCS](RCS "wikilink") to check-out/check-in the file!

## Some History

Tardis's firewall is reasonably restrictive on outbound connections.
Some of the restricted services are as follows:

Outbound ssh access was previously disallowed. This was presumably for
security reasons, although the original rationale is not exactly known.
Certainly there was some justification in the arguement that, if you can
ssh to tardis, you can ssh to other hosts directly. This restriction was
found to occasionally be irritating, and there were genuine use cases
for allowing outbound ssh (svn+ssh being a good example). The current
tardis admins decided at a meeting to remove the restriction.

All http requests should go via the university's proxy servers. This is
as much to enforce common sense. It may also have been the case that
previously the university had this as an official requirement. At one
point of time, the university was being billed separately for
intercontinental traffic, and made some explicit policies relating to
http cache usage.

IRC access from tardis has been re-enabled after previously being
forbidden this was on the grounds that informatics currently allow it
and it was doubted that there will be any problems.

## Notes

-   Be careful!

[Category:OutOfDate](Category:OutOfDate "wikilink") [Category:Admin
Documents](Category:Admin_Documents "wikilink")
[Category:Services](Category:Services "wikilink")