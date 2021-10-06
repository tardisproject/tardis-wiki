*"Orbited provides a pure JavaScript/HTML socket in the browser. It is a
web router and firewall that allows you to integrate web applications
with arbitrary back-end systems. You can implement any network protocol
in the browser—without resorting to plugins."*

In short, Orbited is a COMET based "Web Server" providing an interface
between Web Applications other more traditional types of TCP connection.
For example, Orbited can be used to deploy a "pure" web interface to an
IRC chat room, without the need for a messy client side Java or Flash
application. See an example [here](http://orbited.org/wiki/LiveHelp)

An Official release of Orbited is being maintained on the Tardis by
[User:Lolsoc](User:Lolsoc "wikilink"). It was deployed using Python's
[easy_install](easy_install "wikilink") and can be removed in this way
too should it begin to cause problems.

## Configuration

orbited.cnf is found in /etc/ and is the default configuration loaded
when you start Orbited.

## Deployment

Orbited will probably be running on Port 8069, simply because it can.
It'd be nice if we could daemonize it.

It is currently running on [mara](mara "wikilink") and started from
/etc/rc.local.

## Using Orbited

[Compsoc](Compsoc "wikilink") are currently using Orbited to maintain a
web interface to their IRC chat room. Rumours have circulated suggesting
that this is part of "Oli's strategy to get more Women on IRC". Oli
would probably agree.

## Documentation

-   [Orbited Website](http://orbited.org)

[Category:OutOfDate](Category:OutOfDate "wikilink")