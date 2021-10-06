Tempus is the KVM template name for CentOS 6.5 on the Proxmox cluster.
It was created from a bare Minimal install from CentOS 6.5 netinstall,
with common packages (e.g. vim) added for convenience.

## Added packages

-   vim
-   htop
-   epel-release
-   screen
-   wget
-   bind-utils (dig and friends)

## Cloning

Right click VM 102 (tempus.tardis.ed.ac.uk) under gallifrey and select
Clone. Use the following settings:

-   Target node: Gallifrey (you can migrate it after cloning)
-   Mode: Full Clone (linked ties it to the template!)
-   Target Storage: local
-   Format: QEMU image format (qcow2)

## Post-Clone

After cloning the VM, the VM itself needs some changes:

-   Add a Bridged VirtIO Network Device in Hardware (no VLAN, no
    Firewall)
-   Adjust memory capacity as needed
-   Expand (not reduce) disk space as needed. Reconfiguring LVM is left
    as an exercise for the reader.

The VM network needs to be reconfigured (its default is DHCP, with
adapter as a NAT to the VM host):

-   Set static IP
-   Change hostname from tempus.tardis.ed.ac.uk to the correct one.

Both of these steps should be done by running system-config-network,
which is a TUI for configuring interfaces **and** DNS settings. To add
the network device:

-   In Device configuration, select "<New Device>"
-   Ethernet
-   Name can be anything
-   Device: eth1
-   Static IP: The machine IP address
-   Netmask: 255.255.255.192
-   Primary gateway IP: 193.62.81.1
-   Primary DNS Server: 193.62.81.14
-   Secondary DNS Server: 8.8.8.8 (just in case Leela is down)

Then to load the interface on boot:

-   Open /etc/sysconfig/network-scripts/ifcfg-NAME (where NAME is the
    name set earlier)
-   Change ONBOOT=no to ONBOOT=yes
-   Save.

The needed settings under DNS Configuration are here:

-   Hostname: Set to machine name with .tardis.ed.ac.uk postfix.
-   Primary DNS: 193.62.81.14
-   Secondary DNS: 8.8.8.8
-   Tertiary DNS: 8.8.4.4
-   Search Domain: tardis.ed.ac.uk

The rest of the VM should(tm) be fully functional out of the box,
including root SSH.

[category:infrastructure](category:infrastructure "wikilink")

[Category:Admin_Documents](Category:Admin_Documents "wikilink")