This is referring to the 'new' router running within
[Hyperchicken](Hyperchicken "wikilink").

Static IP is 10.6.0.2 if router goes down.

**This information is here because NetBox seems to be read-only at the
moment**

## Current host

## Networking and VLANs

The VM has two NICs, vmx0 is connected to the 'Trunk Ports' port group
(a VLAN trunk into the switch), vmx1 is connected to the 'EDLAN Ports'
port group, which is connected untagged to the EdLAN uplink.

There are these VLANs in Tardis at the moment:

-   **Internal: 10.6.0.0/23 on VLAN 6** - DHCPed, general internal
    network for new things, replaces Projects
-   **TardisLAN: 193.62.81.0/26 on VLAN 3** - old primary network using
    our public IP space
-   **Colo: 193.62.81.145/28 on VLAN 7** - colocation network, has some
    DHCP pool allocated
-   **CompSoc: 193.62.81.129/28 on VLAN 5** - CompSoc network (why isn't
    this in Colo?)

## LDAP (or lack of)

LDAP doesn't seem to want to work, it can bind and pull down OUs on the
config page, but the tests fail. Probably something to do with the
following:

`May 24 19:12:36 jellybaby slapd[2266]: conn=x op=1 SRCH base="ou=People,dc=tardis,dc=ed,dc=ac,dc=uk" scope=2 deref=1 filter="(|(ou=*)(cn=users))"`
`May 24 19:12:36 jellybaby slapd[x]: <= bdb_equality_candidates: (cn) not indexed`
`May 24 19:12:36 jellybaby slapd[x]: conn=x op=1 SEARCH RESULT tag=101 err=0 nentries=1 text=`
`May 24 19:12:36 jellybaby slapd[x]: conn=x op=2 UNBIND`

## Email notifications

It is configured to send notifications to sysmans@ via
[Chloe](Chloe "wikilink").