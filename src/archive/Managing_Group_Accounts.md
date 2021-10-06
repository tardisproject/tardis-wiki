Group accounts are necessary when a number of users need access to the
same set of files, for example, a society webpage. All of the users who
wish to edit these files **MUST** be tardis account holders.

Two things need set up, the group (or role) account, and the the unix
group. Both will have the same name.

## Creating the group/role account

### Add normal user account

Use `tardis adduser `<username> add an account.

### Removing the account password

Create a file called `removepw.ldif` (or use the one on
`vortis:/root/`).

    # extended LDIF
    #
    # LDAPv3
    # base <ou=Group,dc=tardis,dc=ed,dc=ac,dc=uk> with scope sub
    # filter: cn=admin
    # requesting: ALL
    #
    #
    # Use ldapmodify, bound as root or as the user

    dn: uid=GROUPNAME,ou=People,dc=tardis,dc=ed,dc=ac,dc=uk
    changetype: modify
    replace: userPassword
    userPassword:

Then do:

    ldapmodify -x -D cn=admin,dc=tardis,dc=ed,dc=ac,dc=uk -W -f removepw.ldif

## Creating the group

### Get a group ID

    ldapsearch -x -b 'ou=Group,dc=tardis,dc=ed,dc=ac,dc=uk' objectClass=posixGroup

Pick a new one that's one higher than the previous highest one, etc.

### Create the group

Create a file (or use the one in `vortis:/root/`), substituting the
capitalised bits with the appropriate information:

    # GROUPNAME, Group, tardis.ed.ac.uk
    dn: cn=GROUPNAME,ou=Group,dc=tardis,dc=ed,dc=ac,dc=uk
    objectClass: posixGroup
    objectClass: top
    cn: GROUPNAME
    gidNumber: GROUPNUMBER
    memberUid: SOMEUSER

*Does the memberUid entry need to be there when creating? Probably not,
but you'll know at least one user to put in the group when you make the
account, and it saves you messing with ldapvi later*

Save it as `addgroup.ldif`, then do:

    ldapadd -x -D cn=admin,dc=tardis,dc=ed,dc=ac,dc=uk -W -f addgroup.ldif

This needs the LDAP admin password.

## Adding users to the group

Using ldapvi:

    ldapvi -h ldap.tardis.ed.ac.uk -D 'cn=admin,dc=tardis,dc=ed,dc=ac,dc=uk' -b 'ou=Group,dc=tardis,dc=ed,dc=ac,dc=uk' '(cn=GROUPNAME)'

*(substituting the relevant group name for GROUPNAME*) You will be
presented with vim, looking a bit like:

    # ldapvi(1)

    0 cn=gliding,ou=Group,dc=tardis,dc=ed,dc=ac,dc=uk
    objectClass: posixGroup
    objectClass: top
    cn: GROUPNAME
    userPassword: {crypt}*
    gidNumber: GROUPNUMBER
    memberUid: SOMEMEMBER

Add memberUid entries at the bottom for each for each user required.
Save the file and quit vim, and the groups will be updated.

## Allowing sudo access

To allow a user to run `sudo` commands, add them to the `assistant` LDAP
group (see [Browse LDAP](Browse_LDAP "wikilink") for how)

## Creating group webspace

*Same as user webspace, with obvious changes*.

See [General
Administration](General_Administration#Providing_a_user_with_web_space "wikilink").

## Adding a vhost

There are two ways to add vhosts. One for fussy people and one for lazy
people.

The lazy option is to simply add the appropriate CNAME for www in DNS.
Then requests aimed at <http://www.foo.tardis.ed.ac.uk/> are proxied to
<http://www.tardis.ed.ac.uk/~foo/>

Fussy people (with scripts that care that the user's seeing the same url
the script thinks they're seeing) need the above done, as well as:

-   An entry in davros:/etc/apache/vhosts/foo . Have a poke around at
    others in there to look for one that's close to what you want, the
    etv one looks fairly minimal. Oh, and remember to use
    [RCS](RCS "wikilink")!
-   Directories and things in /tardis/www/vhosts/foo/ . Use the same
    structure here as for single users.

## Usage

Advise your group account users to then use "sudo -u <groupaccountname>
-s -H" to use the account.

[Category:OutOfDate](Category:OutOfDate "wikilink") [Category:Admin
Documents](Category:Admin_Documents "wikilink")