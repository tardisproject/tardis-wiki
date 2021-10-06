Tardis now has some IPv6 connectivity. We currently use a [6to4
tunnel](#6to4_tunnels_and_6to4_relay "wikilink") to the IPv6 network.
Ideally it would be great if we had native IPv6 access through
[EdLAN](EdLAN "wikilink") but this relies on IPv6 being supported by
EdLAN and the Informatics Network.

The we now have a 6to4 tunnel running on [ace](ace "wikilink") which
provides IPv6 connectivity as well as packet filtering for the rest of
the Tardis network. IPv6 autoconfiguation could be then be provided
through either [Quagga](Quagga "wikilink") or [radvd](radvd "wikilink"),
though static configuration might be more suited for the time being.

<span style="color: red">IPv6 is currently broken due to external
filtering of the router's address. See [IPv6
Report](IPv6_Report "wikilink") for proposal to get a new connection set
up.</span> --[Dcoles](User:Dcoles "wikilink") 10:58, 16 November 2010
(GMT)

## Getting Connected

JANET currently supports 4 ways to gain IPv6 connectivity.

1.  Native IPv6 connections where available
2.  Manually-configured IPv6 tunnels
3.  6to4 tunnels and 6to4 relay
4.  IPv6 tunnel broker/server

### Native IPv6 connection

This is the holy grail of IPv6 connectivity and where everything should
eventually end up. The JANET core has been IPv6 enabled for a few years
but the regional networks have been a bit slower off the mark. One of
the services provided by SuperJANET5 is native IPv6 traffic and this has
been identified by both EaStMAN [(see
here)](http://www.eastman.net.uk/target-objectives0607.html) and EdLAN
[(see here)](http://www.ucs.ed.ac.uk/nsd/nsd-operations.html) as target
objectives for 2006/2007.

In November 2008 [dcoles](User:Dcoles "wikilink") spoke to Informatics
about IPv6 support and got the following response from Sam (Wilson?):

> <em> We have IPv6 prefixes and it's routed on the EaStMAN backbone. We
> haven't turned it on on EdLAN because there's a whole raft of stuff
> that isn't ready yet - our admin tools don't handle it, we don't know
> which of the address formats we should support or encourage, we'd want
> to tread carefully because when you turn it on on a router interface
> stuff just starts using it, which can actually cause a loss or
> degradation of service, and until fairly recently (and there's still
> an element of this) the protocols and conventions were changing
> wildly.
>
> We've also held off because of lack of pressure to provide it, but if
> you or the Tardis crew want to try it out then let us know. We can
> assign you addresses and configure routing and reverse DNS delegation
> for you. I'm not sure if Tardis ought to be part of the Uni address
> space or whether they should get their own /48 (64K subnets with
> 48-bit host addresses - that should be plenty). </em>

George Ross also added:

> <em> We haven't tried any IPv6 at all within Informatics, or even
> really looked at it. I think we'd want to before we got it turned on
> on any of our EdLAN interfaces. </em>

### Manually-configured IPv6 tunnels

JANET provides an experimental IPv6 service which lets sites create a
6in4 tunnel to the JANET core. This is probably the most preferable
option at the moment since it would mean Tardis would be allocated an
IPv6 address out of the JANET IPv6 space (2001:0630::/32). Tunnels are
manually configured so all requests have to be made to the [JANET
Technical Administration Group](mailto:ipaddress@ja.net).

### 6to4 tunnels and 6to4 relay

An alternative to a manual tunnel is the semi-automatic 6to4 protocol
which allocates a IPv6 address based on the public IPv4 address (in the
2002::/16 range). The disadvantage of this method is that while it
allows 6to4 hosts to communicate quite effectively there is no way to
contact the native IPv6 network. Hence you need to use a 6to4 relay to
connect to the native IPv6 network. JANET provides a relay at
192.88.99.1 for hosts on the JANET network.

You can specify reverse DNS servers for a 6to4 network just by visiting
[NRO 6to4reverse form](http://6to4.nro.net/) and entering the details.

### IPv6 tunnel broker/server

The final way is to use a broker service to connect. While this method
is relatively easy to set up (See the [JANET Broker
Service](http://www.broker.ipv6.ac.uk/)) and has the advantage of being
able to use both IPv6-over-IPv4 tunnels and IPv6-over-UDP tunnels (which
can get around some firewall/NAT issues) it's more designed for end
users connectivity. For more permanent connections one of the other
methods is preferred.

## Tardis Configuration

At the moment we are using 6to4 with the external router IP address of
ace (129.215.160.171) meaning that it is allocated the network range
2002:81d7:a0ab::/48. Tardis' name servers have been specified at
[NRO](http://6to4.nro.net/) so reverse DNS should work on these
addresses (b.a.0.a.7.d.1.8.2.0.0.2.ip6.arpa).

### External Network

The external network is allocated 2002:81d7:a0ab:0::/64. This network
basically consists of just [ace](ace "wikilink")'s external interface
(eth0) at 2002:81d7:a0ab::1 and exists mainly for routing purposes.

### Internal network

The internal network is allocated 2002:81d7:a0ab:1::/64 with the gateway
being [ace](ace "wikilink")'s internal interface (eth1.3) at
2002:81d7:a0ab:1::1.

To assign an IP to a host just edit /etc/network/interfaces and add:

`iface eth0 inet6 static`
`    address 2002:81d7:a0ab:1::`**<SOMETHING>**
`    netmask 64`
`    gateway 2002:81d7:a0ab:1::1`

### Firewall

Like IPv4 traffic IPv6 traffic is filtered. At the moment the only
ICMPv6 and SSH to the shell hosts are routed (see the
*tardis-IPv6firewall* script). Other services may be added on request.

## See Also

-   [JANET: IPv6
    Home](http://www.ja.net/development/network-engineering/ipv6/)
-   [JANET: IPv6
    Technologies](http://www.janet.ac.uk/technologies/ipv6.html)
-   [JANET: IPv6 Experimental
    Service](http://www.ja.net/development/network-engineering/ipv6/ipv6-experimental-service.html)

[Category:OutOfDate](Category:OutOfDate "wikilink")
[Category:Services](Category:Services "wikilink")