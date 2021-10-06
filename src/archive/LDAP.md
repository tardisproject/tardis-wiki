Tardis quite likes LDAP - as opposed to it's admins, which are less than
fond of freaky pam gubbins.

{{

` InfoBox`
`   |text= See `[`Browse`` ``LDAP`](Browse_LDAP "wikilink")` for a tutorial on browsing LDAP.`
`   |colour=#0f0`

}}

## Miscellaneous Commands

To add someone to a group in LDAP:

    bung@gallifrey:/$ ldapvi -D 'cn=admin,dc=tardis,dc=ed,dc=ac,dc=uk' -b 'ou=Group,dc=tardis,dc=ed,dc=ac,dc=uk' '(cn=admin)'

(Ask me about the password. --[Bung](User:Bung "wikilink") 15:05, 3
January 2006 (GMT))

Add the new entry appropriately, e.g.

    memberUid: bob

Quit the editor, say 'y' to the prompt, and you've volunteered a whole
new era of Tardis adminning!

In the case of admin, you'll want to change their default group from
student to assistant:

    bung@gallifrey:/$ ldapvi -D 'cn=admin,dc=tardis,dc=ed,dc=ac,dc=uk' -b '(uid=bob)'

And change

    gidNumber: 1005

to

    gidNumber: 1001

To search for a specific user in LDAP (this seemed to work):

    ldapsearch -D 'cn=admin,dc=tardis,dc=ed,dc=ac,dc=uk' -b 'dc=tardis,dc=ed,dc=ac,dc=uk' -W "(uid=username)"

(You can also ask me for the LDAP password
--[Hayden](User:Hayden "wikilink") ([talk](User_talk:Hayden "wikilink"))
22:08, 12 October 2013 (BST))

On some hosts (usually gateways like fez), nscd caches the shit out of
LDAP, much to admin annoyance. Clear the cache as so:

    nscd -i group
    nscd -i passwd

This will clear nscd's Group and Shadow databases, forcing them to be
re-read from LDAP.

[Category:Services](Category:Services "wikilink")