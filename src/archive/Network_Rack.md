# Hardware

| Model & Expansions         | Hostname / Label & Console Cable      | Telnet Port & Baud                                 |
|----------------------------|---------------------------------------|----------------------------------------------------|
| Cisco 2600 Router          | NM-4E Ethernet module, WIC 2T         | R1                                                 |
| Cisco 2600 Router          | NM-4E Ethernet module, WIC 2T, WIC 1T | R2                                                 |
| Cisco 2600 Router          | NM-4E Ethernet module, WIC 2T, WIC 1T | R3                                                 |
| Cisco 2600 Serial Console  | NM-32A Async Serial module            | SC1                                                |
| Cisco Catalyst 3750 Switch | None                                  | SW1                                                |
| Cisco Catalyst 3750 Switch | None                                  | SW2                                                |
| Cisco Catalyst 3750 Switch | None                                  | SW3                                                |
| Cisco Catalyst 3750 Switch | None                                  | SW4                                                |
| Netgear FS108 Switch       | Attached to SC1, which runs DHCP      | (Actually [User:angusp](User:angusp "wikilink")'s) |

This stuff is all in the network training rack (The 12U flight case)

# Basics

All the networking equipment bar the Netgear dumb switch, which is
unmanaged, runs Cisco IOS. It's not much like anything else and
basically the help command is `?` which will help you with all your
options, give you more specific help with commands, and give you help
with arguments. Use it!

The serial console server (SC1) runs DHCP from it's Ethernet 0/0 port
(Round the back of the rack). This is *usually* plugged straight into
the Netgear FS108 so via that you can access SC1 over telnet like so:
(Note that telnet is a bit odd and the escape sequence is *usually*
`Ctrl-]`)

`$ telnet 192.168.0.1`

and to access all the other devices over serial via SC1, bearing in mind
that the `CABLE_NUM` is the console cable of the target device from the
above table.

`$ telnet 192.168.0.1 6032`*`+CABLE_NUM`*

The escape sequence for IOS telnet is **not** `Ctrl-]` but
`Ctrl-Shift-6 x` because reasons. If you're using IOS telnet, this won't
kill the session, and will actually prevent others from accessing the
box via telnet. To kill the session, do the following after escaping:

`sc>show sessions          `
`Conn  Host                Address             Byte  Idle  Conn Name`
`*  1  192.168.0.1         192.168.0.1            0     0  192.168.0.1`
`sc>disconnect `*`SESSION_NUM`*
`Closing connection to 192.168.0.1 [confirm]`
`sc>`

Where `SESSION_NUM` is the session from the list you wish to kill. Hit
enter when prompted by `Closing connection to 192.168.0.1 [confirm]`

## Using Serial

It's probably worth noting that direct serial isn't usually necessary,
as all the serial consoles can be accessed via the `SC1` telnet
interface; `SC1` itself can also be accessed via telnet. If you are
serialing into `SC1` and want to get at the telnet interface for the
other boxes, IOS has a built in telnet command, although currently I
have no idea what the escape sequence is...

`ios>telnet 192.168.0.1 6033`

Serial on linux can be a bit difficult to set up. Basically google how
to do it for your distro, this'll usually include adding your user to
the `dialout` group and maybe some device config. As for serial
terminals, most are a bit shit. We'd suggest using `minicom` from the
terminal and `PuTTY` from a GUI on Linux, and then Mac users have nicer
things like `CoolTerm`. I'm not too sure about Windows but stuff like
`PuTTY` seems to work well there also.

# Saving Config Changes

IOS has the neat feature of not saving your config unless you tell it to
- so if you totally screw it up and lock yourself out, power cycling the
device will reset it to the previous config. Once something actually
works and **has been tested** then you can save the config like so:

`ios>enable`
`Password:`
`ios#copy running-config startup-config`
`Destination filename [startup-config]? `
`Building configuration...`
`[OK]`
`ios#`

Give the password when prompted and hit enter at any further prompts.
This will save the running config to the persistent memory. Also the
reverse *should* (I haven't tried it) restore the boot config if you
have't totally FUBAR'd the box.

`ios#copy startup-config running-config`

# SC1 Serial Config

Enable the elevated privileges mode. Enter the password when prompted.
(The # following the hostname indicates that privileged mode is enabled)

`sc>enable`
`Password:`
`sc#`

You can check the current serial config with

`sc#show line`
`   Tty Typ     Tx/Rx     A Modem  Roty AccO AccI   Uses   Noise  Overruns   Int`
`*    0 CTY               -    -      -    -    -      0       1     0/0       -`
`    33 TTY 115200/115200 -    -      -    -    -      0       0     0/0       -`
`    34 TTY 115200/115200 -    -      -    -    -      0       0     0/0       -`
`    35 TTY 115200/115200 -    -      -    -    -      0       0     0/0       -`
`    36 TTY   9600/9600   -    -      -    -    -      0       0     0/0       -`
`    37 TTY   9600/9600   -    -      -    -    -      0       0     0/0       -`
`    38 TTY   9600/9600   -    -      -    -    -      0       0     0/0       -`
` ...`

Enter configuration mode. Hit enter when prompted by the
`Configure from terminal, memory, or network [terminal]?` line.

`sc#configure`
`Configuring from terminal, memory, or network [terminal]? `
`Enter configuration commands, one per line.  End with CNTL/Z.`
`sc(config)#`

Type the following to configure a line. The Async card runs TTYs on
lines 33 - 64, with like 33 being the 1st console cable from the
hardware table. Use `?` to check the other config details. (33 to 35 is
an example - this will config lines 33, 34 & 35)

`sc(config)#line tty 33 35`
`sc(config-line)#`
`...`

Some of the more useful commands are `rxspeed` & `txspeed` to set the
baud rates of the cables you selected. Once again, `?` is your friend.