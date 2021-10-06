.

This page is more commentary on what we're doing, and some history (from
the point of view of 2017).

# Resources

We have a /24 of public IP space - 193.62.81.0/24.

The current whois record shows the following data:

    % This is the RIPE Database query service.
    % The objects are in RPSL format.
    %
    % The RIPE Database is subject to Terms and Conditions.
    % See http://www.ripe.net/db/support/db-terms-conditions.pdf

    % Note: this output has been filtered.
    %       To receive output for a database update, use the "-B" flag.

    % Information related to '193.62.81.0 - 193.62.81.255'

    % Abuse contact for '193.62.81.0 - 193.62.81.255' is 'irt@csirt.ja.net'

    inetnum:        193.62.81.0 - 193.62.81.255
    netname:        UNI-EDINBURGH
    descr:          University of Edinburgh
    descr:          The Tardis Project, Edinburgh, UK
    descr:          University of Edinburgh
    country:        GB
    admin-c:        WRT2-RIPE
    admin-c:        CC1722-RIPE
    tech-c:         CC1722-RIPE
    tech-c:         WRT2-RIPE
    status:         ASSIGNED PA
    mnt-by:         JANET-HOSTMASTER
    created:        2001-10-24T08:13:18Z
    last-modified:  2017-10-25T14:51:18Z
    source:         RIPE # Filtered

    person:         Chris Cooke
    address:        Department of Computer Science
    address:        University of Edinburgh
    address:        Edinburgh EH9 3JZ
    address:        United Kingdom
    phone:          +44 31 650 5203
    fax-no:         +44 31 667 7209
    nic-hdl:        CC1722-RIPE
    created:        1970-01-01T00:00:00Z
    last-modified:  2016-04-05T14:13:11Z
    mnt-by:         RIPE-NCC-LOCKED-MNT
    source:         RIPE # Filtered

    person:         W R Taylor
    address:        Edinburgh Parallel Computing Centre
    address:        University of Edinburgh
    address:        Edinburgh EH9 3JZ
    address:        United Kingdom
    phone:          +44 31 650 5027
    fax-no:         +44 31 650 6555
    nic-hdl:        WRT2-RIPE
    created:        1970-01-01T00:00:00Z
    last-modified:  2016-04-05T14:13:11Z
    mnt-by:         RIPE-NCC-LOCKED-MNT
    source:         RIPE # Filtered

    % This query was served by the RIPE Database Query Service version 1.90 (ANGUS)

`admin-c` and `tech-c` should be kept up to date regularly. We need to
clarify who these should be - whether they can be an organisation (ie
Tardis gets its own org in the RIPE DB), or if it should be someone from
the School of Informatics.

# Subnetting & VLANs

Subnetting is done based on logical grouping. Each subnet occupies one
VLAN. The canonical source of information for what is current in this
space is [the prefixes page on
netbox](https://netbox.tardis.ed.ac.uk/ipam/prefixes/).

The splitting of these is mostly to make firewall zoning much easier -
PFSense operates on what interface it receives traffic on.

As such, Tardis services occupy the main VLAN and public subnet.

If a VLAN is internally addressable, tbrb's practice is to give it
10.X.0.0/N, where X is the VLAN ID, and N is a reasonable subnet size
for what it is - usually with the router being on 10.X.0.1. This gives
more flexibility in subnet size than 10.0.X.0, as the biggest subnet you
could do there is a /24.

### Colo services

Colo in this case is defined as Tardis providing VMs or server space to
other **groups**. This is only granted at the discretion of the admins.
These machines generally would be able to be publicly reachable, but any
SSH connections to these machines SHOULD GO THROUGH THE TARDIS SHELL
SERVER (historically the only group exempt from this has been CompSoc,
who have been allowed to operate their own shell server, generally to
the same degree of security as Tardis' own shell servers. CompSoc also
are allocated their own /28 within our /24).

Any colo services do not need access to things behind the Tardis
firewall, and as they are not administered by Tardis, traffic should
have to pass through the firewall to reach Tardis systems. This has not
always been the case, but is good practice to move forward into.

### Project Boxes

Project boxes are more given out to people who need space to run their
own projects, typically honours stuff however it is not limited to that.
These are generally treated the same as colo machines, except the
projects vlan is privately addressed. This is mostly because they don't
generally need anything publicly exposed.

As ever, project boxes should NOT have SSH enabled externally - they
should go via the shell servers.

If they need anything publicly exposed, Tardis should set up a server on
a public subnet (could be main Tardis subnet, could be one of the spare
ones) to act as a reverse proxy. This machine does not need interfaces
on both networks, it has L3 reachability - traffic can go from the
reverse proxy to it's default gateway (the router) and then can reach
the private IPs.

# 2017: Moving to a /25

Tardis, for historical reasons, occupies the first /26 of the network
block. In the past the two /28s immediately after that /26 were
allocated, however these have been freed up and nothing allocated until
the second /25 of our /24. This is with the plan to migrate the main
Tardis LAN from a /26 to a /25. (If we've not yet done this, see [this
page on netbox](https://netbox.tardis.ed.ac.uk/ipam/aggregates/5/) for
something which may help -
`(.64/28 + .80/28) + .96/27 = .64/27 + .96/27 = .64/26`).

To do this move, all we need to do is go and edit the subnet mask &
broadcast address on all relevant machines in the current /26.

The downside to this is Proxmox prompts for a reboot when you change the
subnet mask. Yes, seriously. Don't ask me why, I don't know, but it
does. In theory it can be worked around but I (tbrb) have concerns how
stable that may be.

As this needs considerable downtime, it was going to be left until the
move to AT (from the Forum).

Until this point there are a few things we can do:

-   Clear out old project boxes in the main Tardis subnet which are now
    unused.
-   Ask people who are colo'd in the main Tardis subnet to migrate their
    services to the colo subnet.
-   Generally audit what's running and what's noted as allocated but is
    no longer actually running