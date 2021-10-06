After spending a good few hours in 1415 today Pert and I managed quite a
few of the tasks we aimed to achieve. Some of them however remain on the
todo list.

Tasks we were to complete and some comments are listed below:

-   Clean/service Piper's cooling system
    -   **Done**, 3 siezed case fans oiled and dead CPU fan replaced,
        All working now.

<!-- -->

-   Remove old patch panel and associated Cat5
    -   **Done**, Power wiring and Ethernet cabling rerouted. Three
        machines are still using power from the external powerstrip:
        Davison, McCoy and the Gliding Club laptop. All three machines
        are due for imminent removal which will remove the need for
        external power. There is at least 1 free lead from the internal
        PDU's, more of which should be available when the other machines
        that are to be retired are removed. As part of the rewiring the
        Cisco Serial device was connected to a number of machines and
        the spiderport is now only connected to four machines. The
        numbering will have changed and a new list of serial consoles
        needs to be created. Ideally a longer cable needs to be acquired
        for the Cisco to connect to the remaining Sun machines and the
        spiderport retired completely.

<!-- -->

-   Move IRCd to VM on WOTAN and Retire Adric.
    -   **Done**, as far as i can see irchost now points to ageyman on
        WOTAN. Need to confirm with Pert

<!-- -->

-   Reconfigure Vislor as the backup server
    -   **Partially Done**. Hard disk was replaced with a 120gb drive
        from Tennant. Needs debian installed and configured. If possible
        perhaps look at acquiring a different dell machine that will
        take more than one disk as RAID1 or similar would be nice.
        Perhaps .inf will swap the existing two dells (vislor and adric)
        for a larger cased dell with more room?

<!-- -->

-   Retire Davros, Mccoy and Davison
    -   **Not Done**. This requires urgent attention. Replacement
        machines are mostly intact and just need final configuration.

<!-- -->

-   Skip old/useless hardware from room/cupboard/bacam's office
    -   **Not done** due to being unsure as to where it should go. Pert
        and I came to the conclusion that the ultra1's should all be
        disposed of. It's perhaps worth offering them to any tardis
        members who may find them useful for something at home?

<!-- -->

-   Move all users' home directories into one place and change the
    current directories into symlinks. This will mean that there is no
    need to run automount and '/home' can become a symlink to
    '/tardis/home'.
    -   **Not done**.