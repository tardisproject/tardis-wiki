## Usage Guide

[Fez](Fez "wikilink") and [Torchwood](Torchwood "wikilink") run the
primary and secondary shell login service for Tardis, externally
accessible via `ssh.tardis.ed.ac.uk` and `ssh1.tardis.ed.ac.uk`. In
order to log in to the Tardis systems you will need to obtain an SSH
client. For those with Linux/Unix systems, you should be able to run
`ssh `<var>`username`</var>`@ssh.tardis.ed.ac.uk` from a command shell.
For those in Windows, you are advised to have a look at
[PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/). Use this to
connect to `ssh.tardis.ed.ac.uk`, giving the supplied username and
password.

You can change the password on your new account using `passwd` from the
command line, and you are advised to do so on your first log in. You can
read your mail off the system using pine, or whatever your preferred
mail client is.

For more help in actually getting started using a shell see [Tardis
Beginner Tutorials](Tardis_Beginner_Tutorials "wikilink").

## Shell Server

We run OpenSSH latest authenticated against [LDAP](LDAP "wikilink"). The
primary shell login host is [Fez](Fez "wikilink") which runs Debian
Linux (OpenVZ). To log in ssh `user@ssh.tardis.ed.ac.uk`. Please be
aware that the new SSH server [Fez](Fez "wikilink") is running a ban
service to mitigate brute force attacks; 6 failed attempts at login will
cause a ban; Bans will expire after around 20 minutes of inactivity.

## Dumping Screen Sessions, Weechat, Irssi, etc.

While [fez](fez "wikilink") has a full featured install,
[Torchwood](Torchwood "wikilink") is intentionally nerfed to dissuade
people from dumping sessions there.

## Reboots

Sometimes a reboot needs to happen, though most try to keep these as
infrequent as possible.

Some reasons (not exhaustive) a reboot may need to occur on a shell
server:

-   Critical Security Patches
-   Kernel Updates
-   [unattended-upgrades moaning about a reboot being
    required](#Unattended_Upgrades "wikilink")
-   'Hardware' changes (in the case of a VM)
-   Hardware changes (in the case of [Torchwood](Torchwood "wikilink"))

If you need to perform a reboot of a shell server, it's usually nice to
let others know that you're going to do so.

There are a few ways people do this - some will just use the scheduled
reboot functionality in the `shutdown HH:MM` command (remember,
`shutdown -r` does a reboot) - see `man shutdown` for more info on how
to do that.

Another strategy that some use is to edit `/etc/motd` to get users
attention as they login, advertising a planned reboot.

Also useful here is the `wall` command, allowing you to send a message
to all users currently logged in to the server. (You can see who is
currently logged in by running `w` or `who`)

Ultimately, it is up to your own judgement on if you \*should\* reboot a
shell server, and if you are going to, how much you let people know in
advance.

Oh, one more thing... Remember if you're rebooting a machine from
Proxmox over an SSH tunnel, and that tunnel lands on the machine you're
rebooting, you will lose connection to proxmox. This is one of the
reasons we have two shell servers.

### Unattended Upgrades

It emails `root@tardis` daily, and will include `[reboot required]` in
the subject line if it needs the system to be rebooted. It will look a
bit like this:

    Unattended upgrade returned: None

    Warning: A reboot is required to complete this upgrade.

    Packages that attempted to upgrade:

    Packages with upgradable origin but kept back:
     db5.1-util

    Unattended-upgrades log:
    Initial blacklisted packages:
    Initial whitelisted packages:
    Starting unattended upgrades script
    Allowed origins are: ['o=Debian,n=jessie', 'o=Debian,n=jessie-updates', 'o=Debian,n=jessie-proposed-updates', 'o=Debian,n=jessie,l=Debian-Security', 'origin=Debian,codename=jessie,label=Debian-Security']
    Packages that will be upgraded:

It is up to your own judgement if the package mentioned really needs a
reboot, or if it can wait until the next thing to come up that requires
a reboot. This will likely be because of a Debian Security advisory, so
go check [their site](https://www.debian.org/security/).

## SSH Key Fingerprints

    <nowiki>
    -----BEGIN PGP SIGNED MESSAGE-----
    Hash: SHA512

    ssh.tardis.ed.ac.uk SSH host key fingerprints

    +---[DSA 1024]----+
    | . ++.+.Eo       |     MD5 = 09:77:cf:b2:f4:92:8f:3f:80:5d:4d:3f:5c:6c:c6:78
    |  o o=..+        |
    |   . oo. =       |    SHA1 = 5c:ea:9f:23:09:b6:41:c9:7a:27:25:c8:65:73:bb:03:29:31:09:9d
    |   .. o.o +      |
    |   .o+. SO       |  SHA256 = SsFBckLI7Ysn7kW8z6SWdCtSW1QTKO8fGVv+OQJZjBE
    |  o.=o+.* .      |
    | . =o=oo o . .   |   SSHFP = 2 1 5CEA9F2309B641C97A2725C86573BB032931099D
    |  o.==. . . +    |
    | ..o..o    . .   |   SSHFP = 2 2 4AC1417242C8ED8B27EE45BCCFA496742B525B541328EF1F195BFE39 02598C11
    +----[SHA256]-----+

    +---[ECDSA 256]---+
    |   .o.o+.+ +o.   |     MD5 = 85:72:6c:c6:02:b5:97:29:ab:7d:50:a2:66:e2:19:83
    |   . o..+ =  .   |
    |  .   +.o.E . .  |    SHA1 = 76:1f:da:ac:57:22:4a:2d:4a:7c:85:a6:b4:2b:ce:52:a9:a1:af:4c
    |   .  .B.. . o   |
    |    + .oS . o    |  SHA256 = /FWqFhWByak+WqejSsbmU1EJ4ZUIpD/2R6vUtBB8Tl4
    |   o o.=++.+     |
    |    =.oo=++      |   SSHFP = 3 1 761FDAAC57224A2D4A7C85A6B42BCE52A9A1AF4C
    |   =...oo.       |
    |    ooo. .       |   SSHFP = 3 2 FC55AA161581C9A93E5AA7A34AC6E6535109E19508A43FF647ABD4B4 107C4E5E
    +----[SHA256]-----+

    +---[RSA 2048]----+
    |             .o=.|     MD5 = 48:ca:45:2d:93:94:17:07:7c:88:e1:93:ad:ba:76:c1
    |            . .o*|
    |            .o.*=|    SHA1 = ef:da:27:86:04:63:13:1f:60:5f:17:bd:13:fe:26:f9:9d:e9:b2:7f
    |             oO B|
    |        S o.++.++|  SHA256 = z5zlP0paA3dwxfz1qFyNM1YDPkX7XtmKWOJO0msjJwc
    |        E* Xoo o.|
    |        ..X * . .|   SSHFP = 1 1 EFDA27860463131F605F17BD13FE26F99DE9B27F
    |        o+== o.  |
    |         *+..... |   SSHFP = 1 2 CF9CE53F4A5A037770C5FCF5A85C8D3356033E45FB5ED98A58E24ED2 6B232707
    +----[SHA256]-----+

    -----BEGIN PGP SIGNATURE-----
    Version: GnuPG v2

    iQIcBAEBCgAGBQJZ8mAQAAoJELr//1/1/6qvQW0P/34S4cYyqNCjuKtXUW1p03LL
    kJebFYvwl72YHuShifNNAidOK5wp8VLWrAHg+lLQHZ8trghCsxrMxhjHBUhMbMEZ
    pWk74uiswwv+WWwotO26dRMwRo12HN813UZRfjp+Gyqu5b5WOdgOnG3qN/CIspmu
    j99UnCuZ39WpeXR8xGGWcAFF+5OT7aRugjtGLBUM/Vdc4o0qJP56AFyoYr9TWy0+
    s16XeQN2pcAS+EdlWERPniBNOg+3sON+LSkBvFWLEA0dqUoDEjsXJOAnFKRWZ4hA
    ad/rIa73V1v9xyCvI07ZlRMia4K/Kdu+MzNPSb+pTcld/mtN3kRwAo6LytMkqhel
    1qtRsgk/e57gR98IN1Og8rgN+QDG1t7i5DuaqdRxWkoxuL3M7I1ntMVUvsjxnP21
    d2aq8oD+3TgAqUjY8Ct41u5DxGVyGlSHVoi5nLOkkNvYOqYlsO36GB6pQniLTOU3
    zo3uQSBXLVwpujhBlZSIM6fSBUvkGSMIBz3uaYkNhJXPkdqAs+LH2f58+3/FNKPW
    AAo180I8gLoRoWi7lMX4YcYJp1rXERI8qhISs+soLIKFp8I/CJJt177kcPclltUU
    MjTo88HzcY69TfeBkXT35Q3zYsGdAcPh58T3C+du9Dnc9QW9mCwcebcstzAa+RIz
    V5Lq1rYwxvfPDUYoAvnN
    =9eyV
    -----END PGP SIGNATURE-----
    </nowiki>

    <nowiki>
    -----BEGIN PGP SIGNED MESSAGE-----
    Hash: SHA512

    ssh1.tardis.ed.ac.uk SSH host key fingerprints

    +---[DSA 1024]----+
    | o. .   oo.      |     MD5 = 9b:20:a7:2c:0e:32:6f:41:81:1f:6e:9d:42:ea:99:43
    |. .o   .o+ o     |
    |. + + o o.B      |    SHA1 = 53:49:87:c0:29:09:1c:af:50:be:6b:52:e1:ea:b9:ba:4b:0c:11:6a
    | . O =   O .     |
    |  + o o S *      |  SHA256 = QiYkjN7Zn1OWa2rNtAdRhssx5IT/UspPomISSn3APKY
    | E o . = X o     |
    |. . o   O B      |   SSHFP = 2 1 534987C029091CAF50BE6B52E1EAB9BA4B0C116A
    | . . o + + o     |
    |    o o   .      |   SSHFP = 2 2 4226248CDED99F53966B6ACDB4075186CB31E484FF52CA4FA262124A 7DC03CA6
    +----[SHA256]-----+

    +---[ECDSA 256]---+
    |      *O+o.      |     MD5 = 7f:97:dc:41:a1:1e:c8:a1:60:f7:b5:74:01:58:04:3c
    |      oO=oE      |
    |      Oo=..      |    SHA1 = 49:4c:c1:8f:50:c9:07:56:94:fa:b5:8e:49:ba:2e:14:b0:e8:37:23
    |     =.B.O       |
    |    ..B.S.=      |  SHA256 = B9JoVlKwO2kx0ZbqF25qiWhbUs3d3twI2JJWEpgRX3g
    |   . ..o++ + o   |
    |  .... =  . + .  |   SSHFP = 3 1 494CC18F50C9075694FAB58E49BA2E14B0E83723
    |  oo. +          |
    | ... .           |   SSHFP = 3 2 07D2685652B03B6931D196EA176E6A89685B52CDDDDEDC08D8925612 98115F78
    +----[SHA256]-----+

    +---[RSA 2048]----+
    |        o o+XO**B|     MD5 = 14:a6:25:26:dc:c2:91:02:b6:5d:dc:5c:3c:81:db:f2
    |       o o.%.*+=.|
    |        . * * * o|    SHA1 = 34:23:fe:5a:2f:40:74:46:06:78:5e:c5:cd:64:62:06:a5:7a:53:10
    |           = E.oo|
    |        S . + +=o|  SHA256 = dwUOYt5TiXHUwaDlFDpXRq87QNzpURwVIXlvGt+9IRw
    |         . . +.o+|
    |              + o|   SSHFP = 1 1 3423FE5A2F40744606785EC5CD646206A57A5310
    |               o |
    |                 |   SSHFP = 1 2 77050E62DE538971D4C1A0E5143A5746AF3B40DCE9511C1521796F1A DFBD211C
    +----[SHA256]-----+

    -----BEGIN PGP SIGNATURE-----
    Version: GnuPG v2

    iQIcBAEBCgAGBQJZ8l//AAoJELr//1/1/6qvCx4QAJRSw91u9S+94RmVyFq/e3CX
    rGbkw+M+JGZKqLO47a5tWA/XEgVck2/ZwSmSkYg0CMJIc+lSPmX+OaxQG111vzxe
    fei6S1VImmuJcAGwdnhXfXdus54+7iK5u+iNAQUMZAOE9r4tWlyhQYqmqs1Ui1ns
    lMbfXKnlysIih1CK0CFzoByXRNBxuwzns65yI/FSFKepFr5dIgX9lsOEkHL8QHMw
    +oeSpJ3nVix6cAhrbfUHDLj3yYAruCmpDpexEiZt63350j0iF4k/RAkiG+IJT0di
    hJv7U78qnVIl8MJ1YZI6CYNVtKw45VX13aXDoCUJ/L9u0VmfY5Mt9qRh9fe4SX4X
    OkRQg8H95hOWDXi/6OPTVm4DCxqiRj4Z1NQ9NAZLf0tE+pVn8mNqiITXdjxvVbvp
    UJyjnD+7A+RaH0xd8azkI9iS+6gqpI+QPQmBvIfevQP6U7K1Pa+FHrSRCpWWB/VX
    +SkZbyrebgiK7TmBzMu0vfM1cB9s9DOdk/LbWH+yro3iZrLaf7HrdJQHo5JpSN7D
    r7vcYHPqueqovRgA9VyeSLmt+pzliRmyLP/3dwWg/fNN03C0O8oq5mG4zQOIJ0Et
    OjV/5CTd1AxTlnnbgGhm0Igkypu4HnlyDObTpwtduUwA8HWoEbH0r8Wc4ViH20K0
    htXfJDCU3U2UcTGg3+Yy
    =EM71
    -----END PGP SIGNATURE-----
    </nowiki>

[category:ExternalServices](category:ExternalServices "wikilink")
[category:Services](category:Services "wikilink")