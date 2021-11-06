# Systems

Information on the different systems currently running on TARDIS.

## Active Systems

This is from pinging the list on the old tardis wiki, and from the zone transfer scan (commands below).

There's a machine labelled avernus in the rack, but I can't seem to reach it. Probably mislabelled?

Shodan query (publicly available services):|https://www.shodan.io/search?query=hostname%3Atardis.ed.ac.uk

```bash
dig -t AXFR @rose.tardis.ed.ac.uk tardis.ed.ac.uk &#124; grep -e "IN\s*A" &#124; sed 's/\t/ /g' &#124; cut -d ' ' -f 5
&#124; sort -u > ips
nmap -v -sn -iL ips
```

| Hostname                  | IP Address    | Virtualised? | Wiki URL                                       | Current Services   | Notes                                                                                      |
| ------------------------- | ------------- | ------------ | ---------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------ |
| Angel                     | 193.62.81.20  | Maybe        |                                                | GlidingSoc Website |                                                                                            |
| Beeblebrox                | 193.62.81.36  | No           |                                                |                    |                                                                                            |
| Bi                        | 193.62.81.46  | Maybe        |                                                | Better Informatics |                                                                                            |
| Cybermat                  | 193.62.81.9   | Yes          | https://wiki.tardis.ed.ac.uk/wiki/Cybermat     | Github             |                                                                                            |
| Fez                       | 193.62.81.19  |              | https://wiki.tardis.ed.ac.uk/wiki/Fez          | Shell service      |                                                                                            |  |  |
| Hyperchicken              | 10.6.0.2      | No           | https://wiki.tardis.ed.ac.uk/wiki/Hyperchicken |                    |                                                                                            |
| Hyperion                  | 193.62.81.6   |              | https://wiki.tardis.ed.ac.uk/wiki/Hyperion     | Storage            |                                                                                            |
| Inform                    | 193.62.81.2   |              |                                                | Flipdesk, pfSense  | :8080 does some firewall dump, I'm assuming this is how we open ports on the uni firewall? |
| Isolus                    | 193.62.81.50  | Maybe        |                                                |                    |                                                                                            |
| Jellybaby                 | 193.62.81.41  | Yes          | https://wiki.tardis.ed.ac.uk/wiki/Jellybaby    |                    |                                                                                            |
| Kal                       | 193.62.81.1   |              |                                                | Router             |                                                                                            |
| Karn                      | 193.62.81.3   | Yes          | https://wiki.tardis.ed.ac.uk/wiki/Karn         |                    | Resolves to irc.imaginarynet.org.uk                                                        |
| Metalgear                 | 193.62.81.51  | No           | https://wiki.tardis.ed.ac.uk/wiki/Metalgear    | GameSoc            | At metalgear.gamesoc.tardis.ed.ac.uk                                                       |
| Rose                      | 193.62.81.14  |              | https://wiki.tardis.ed.ac.uk/wiki/Rose         | DNS                |                                                                                            |
| router252.tardis.ed.ac.uk | 129.215.252.2 |              |                                                |                    | Outside our subnet, probably uni gateway?                                                  |
| Tennant                   | 193.62.81.52  | No           | https://wiki.tardis.ed.ac.uk/wiki/Tennant      | Proxmox            |                                                                                            |
| Toclafane                 | 193.62.81.15  | Yes          | https://wiki.tardis.ed.ac.uk/wiki/Toclafane    |                    |                                                                                            |
| Torchwood                 | 193.62.81.42  | Maybe        | https://wiki.tardis.ed.ac.uk/wiki/Torchwood    |                    | Should be offline, but it's responding to pings                                            |
| Vigil                     | 193.62.81.23  | Maybe        |                                                |                    |                                                                                            |