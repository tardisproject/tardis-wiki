## RIP Configuration

In PFSense routed needs some tweaking to prevent RIP announcing any
internal networks. To do this line 92 in /usr/local/pkg/routed.inc needs
the "passive" tag added:

`   $ret .= "no_rip_out no_solicit no_rdisc no_rdisc_adv passive";`

This means that when /etc/gateways is generated any interface without
RIP enabled won't be announced to everything.

The long term solution to this is not to use RIP!

[category:Systems](category:Systems "wikilink")