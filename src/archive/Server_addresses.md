This provides the addresses of various servers which a Tardis machine
might need to use.

## DNS

We have an internal caching nameserver, currently `leela`,
`193.62.81.14`. However, other machines should be able to cope if it's
down for maintenence, so we also use one of the university's servers.
(Currently `129.215.200.7`, but we should check if that's what we're
*supposed* to use.)

Thus most machines have a `/etc/resolv.conf` along the lines of:

    search tardis.ed.ac.uk
    nameserver 193.62.81.14
    nameserver 129.215.200.7

## Others

-   [Experi](Experi "wikilink")

[category:infrastructure](category:infrastructure "wikilink")

[Category:OutOfDate](Category:OutOfDate "wikilink")
[Category:Admin_Documents](Category:Admin_Documents "wikilink")