## Using Tardis' VLAN switch

We have a very nice 24 port Cisco Catalyst 2900 XL switch donated by
[User:sjh](User:sjh "wikilink"). It runs Cisco IOS Version 12.0(5.1)XP
\[c2900XL-h2s-mz-120.5.1-XP.bin\]. Cisco have a [configuration
guide](http://www.cisco.com/en/US/products/hw/switches/ps637/products_configuration_guide_book09186a008007e82a.html)
and [command
reference](http://www.cisco.com/en/US/products/hw/switches/ps637/products_command_reference_book09186a00800d855e.html)
online.

It runs a telnet server on the admin VLAN at 192.168.1.4 and is
connected to [Racnoss](Racnoss "wikilink"). Here's a dump of the
switchport config:

    Current configuration:
    !
    version 12.0
    no service pad
    service timestamps debug uptime
    service timestamps log uptime
    service password-encryption
    !
    hostname Switch
    !
    enable password 7 #####################
    !
    !
    !
    !
    !
    !
    no spanning-tree vlan 1
    ip subnet-zero
    no ip domain-lookup
    !
    !
    !
    interface FastEthernet0/1
     description router (ace)
     switchport trunk encapsulation dot1q
     switchport trunk allowed vlan 1-6,1002-1005
     switchport mode trunk
    !
    interface FastEthernet0/2
     description piper
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/3
     description none
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/4
     description wotan
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/5
     description oracle
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/6
     description mantis
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/7
     description none
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/8
     description none
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/9
     description one
     switchport access vlan 4
     spanning-tree portfast
    !
    interface FastEthernet0/10
     description delphon
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/11
     description orgi
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/12
     description none
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/13
     description skaro
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/14
     description none
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/15
     description mara
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/16
     description adric
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/17
     description cluster-sun
     switchport access vlan 4
     spanning-tree portfast
    !
    interface FastEthernet0/18
     description cluster-mercury
     switchport access vlan 4
     spanning-tree portfast
    !
    interface FastEthernet0/19
     description cluster-venus
     switchport access vlan 4
     spanning-tree portfast
    !         interface FastEthernet0/20
     description cluster-earth
     switchport access vlan 4
     spanning-tree portfast
    !
    interface FastEthernet0/21
     description spiderport
     spanning-tree portfast
    !
    interface FastEthernet0/22
     description trogdor
     switchport access vlan 5
     spanning-tree portfast
    !
    interface FastEthernet0/23
     description none
     switchport access vlan 3
     spanning-tree portfast
    !
    interface FastEthernet0/24
     description none
     switchport trunk encapsulation dot1q
     switchport mode trunk
    !
    interface FastEthernet1/1
    !
    interface FastEthernet1/2
    !
    interface VLAN1
     ip address 192.168.1.4 255.255.255.0
     no ip directed-broadcast
     no ip route-cache
    !
    !
    line con 0
     transport input none
     stopbits 1
    line vty 0 4
     password 7 ##################
     login
    line vty 5 9
     password 7 ##################
     login
    !
    end

To configure another port connect to the switch via telnet or via
[Racnoss](Racnoss "wikilink") and do something like:

` Switch>en`
` Password:`
` Switch#conf t`
` Enter configuration commands, one per line.  End with CNTL/Z.`
` Switch(config)#int fa0/16`
` Switch(config-if)#description HOSTNAME`
` Switch(config-if)#switchport access vlan 3`
` Switch(config-if)#spanning-tree portfast`
` Switch(config-if)#exit`
` Switch(config)#exit`
` Switch#`

Use `write memory` to save your changes to the flash memory once you are
happy with the new configuration.

The [old 3com switch](old_3com_switch "wikilink") is also kicking
around.

[category:Admin_Documents](category:Admin_Documents "wikilink")

[Category:OutOfDate](Category:OutOfDate "wikilink")