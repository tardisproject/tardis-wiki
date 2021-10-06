## Networking

There are a good number of interfaces on this machine, configured as
follows:

-   **Onboard NIC 1** - Management: Access to the ESXi console, assigned
    over DHCP.
-   **Onboard NIC 4** - EDLAN uplink into virtual switch 'EDLAN' and
    port group 'EDLAN Ports' - this switch and port group operates
    untagged
-   **PCIe NICs 1-4** - Trunk uplink into network, connected to virtual
    switch 'VM switch'. Requires tagged port groups, these have been
    configured for TardisLAN, Internal, Colo and CompSoc.

## Eww ESXi

-   **'Yes, it's proprietary**' but also fairly nice? It is licensed
    with a perpetual free licence, only restrictions being no vCentre
    for clustering.
-   **'Kill it with fire!**' - please do, it was an experiment which
    threw up some issues - namely it can only handle Microsoft AD not
    OpenLDAP for some obscure reason. Careful though, it has the router
    on it.

[Category:Systems](Category:Systems "wikilink") [Category:
Hosting](Category:_Hosting "wikilink")