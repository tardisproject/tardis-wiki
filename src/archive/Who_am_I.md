## Standards for who-am-i files

-   Every normal Tardis machine should have two who-am-i files in it's
    /root directory. They should be readable by all but writeable only
    by root.

<!-- -->

-   who-am-i, a plaintext file, With the hostname in caps and a brief
    human readable description of what the box does. e.g.:

<!-- -->

    WOTAN

    I think I'm a Xen host...?
    Maybe just because I'm a benevolent computer.

-   Also, a who-am-i.json file should be included, with the following
    attributes:

<!-- -->

    {
    "name":String, lower case
    "hosts":Sting, human readable
    "box":String, human readable
    "ram":Integer, in MB
    "vm":Boolean [true/false]
    "vm-host":String, lower case / null if not a VM
    }

    e.g for Vortis:

    {
    "name":"vortis",
    "hosts":"SSH Gateway",
    "box":"domU on WOTAN",
    "ram":512,
    "vm":true,
    "vm-host":"wotan"
    }

[Category:Services](Category:Services "wikilink")