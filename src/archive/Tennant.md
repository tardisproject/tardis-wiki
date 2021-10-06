Hardware SAS controller can only do RAID 1 or RAID 0, not RAID 10 so
RAID is set up as Hardware RAID 1 and then software RAID 0 on top of
that. Therefore you cannot install Proxmox from the regular install CD
and must first install Debian and then setup Proxmox on top of that.

[category:Systems](category:Systems "wikilink")