## Cabling

Each box
([Sun](Cluster/Sun "wikilink"),[Mercury](Cluster/Mercury "wikilink"),[Venus](Cluster/Venus "wikilink"),[Earth](Cluster/Earth "wikilink"))
is plugged into the switch and has it's own IP on the cluster VLAN
(.35,.36,.37,.38 respectively) this is connected the the first port on
each box (for some reason eth2 within Debian although labeled eth0).

The net-management ports for Mercury, Venus and Earth are plugged into
the other three network ports of Sun. Use the following commands from
sun to connect:

`- Mercury: telnet 192.168.2.2`
`- Venus: telnet 192.168.2.4`
`- Earth: telnet 192.168.2.6`

## Configuration

Cluster TODO:

`- Setup network booting so that the other 3 nodes get up and running. Shared root from head node Sun. [done]`
`- /home should be distributed GlusterFS. Issue is when one or more nodes are down, /home will be offline. "clusterctl" script to mount and unmount.`
`- User authentication via tardis' LDAP server. Require users to be in 'cluster' group.`
`- Password-less ssh logins within cluster. Kerberos(preferred) or script to generate ssh public keys for every new user.`
`- MPI. OpenMPI (preferred if matured enough) or MPICH2.`
`- SSI. Kerrighed if sparc is supported. (conflicts with SGE)`
`- Sun Grid Engine. Might be overkill for our small cluster. (conflicts with SSI)`
`- Write "clusterctl" script.`

Last Modified: [marcoe](User:Marcoe "wikilink") Sun Jan 17 20:52:43 GMT
2010

If possible, shutdown unused nodes and start again via LOM ("clusterctl"
script to automate).

[Category:OutOfDate](Category:OutOfDate "wikilink")