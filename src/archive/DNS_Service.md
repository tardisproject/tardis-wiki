## Daemon

[Rose](Rose "wikilink") runs the standard Debian package of BIND 9.

The `named` daemon on [Rose](Rose "wikilink") is responsible for both
dealing with and forwarding local requests, and answering
authoritatively external requests for the tardis.ed.ac.uk domain.

## Configuration

The DNS philosophy of tardis is to use the machines' own names for A
records and have as many CNAME's as necessary as aliases for their
functions, i.e. ssh.tardis.ed.ac.uk is a CNAME for
[Fez](Fez "wikilink").

The addresses in the tardis domain are distributed thusly:

-   1 Infrastructure 192.168.1.0/24
-   2 Unused 192.168.0.0/24
-   3 Services 193.62.81.0/27
-   4 Cluster 193.62.81.32/28
-   5 Gamesoc 193.62.81.48/29
-   6 Unused 193.62.81.56/29

## Editing

The forward and reverse lookup databases are controlled by
[RCS](RCS "wikilink") to ensure that nobody can completely mess up the
config with a mistake. It is important to `co -l` before editing the
files and `ci -u` when finished, or your changes will be lost (and
you'll probably confuse and annoy whoever edits it next).

All servers should also have PTR records created in the corresponding
database files (for Reverse DNS).

The files to edit are as follows:

-   `db.tardis`: The tardis.ed.ac.uk forward lookup database (IN/CNAME).
-   `db.193.62.81`: The tardis.ed.ac.uk reverse lookup database (PTR).

Once the files have been edited, run `named-checkzone tardis db.tardis`
to verify the zone configuration has been correctly written.

Finally, reload bind with `/etc/init.d/bind9 reload`

[category:Services](category:Services "wikilink")
[category:ExternalServices](category:ExternalServices "wikilink")
[category:Infrastructure](category:Infrastructure "wikilink")

[Category:OutOfDate](Category:OutOfDate "wikilink")