# LDAP

We currently run OpenLDAP with a few extra schemas:

  - [`amd.schema`](/files/ldap/amd.schema) for automounting user directories
  - [`courier.schema`](/files/ldap/courier.schema) for mailboxes
  - [`pmi.schema`](/files/ldap/pmi.schema) for certificates
  - [`tardis.schema`](/files/ldap/tardis.schema) for some extra attributes

Users are stored in `ou=People`, group membership in `ou=Group`, and drive mounts in `ou=Maps`

## Example user

```
# jdoe, People, tardis.ed.ac.uk
dn: uid=jdoe,ou=People,dc=tardis,dc=ed,dc=ac,dc=uk
maildrop: jdoe/
cn: John Doe
uid: jdoe
objectClass: account
objectClass: posixAccount
objectClass: top
objectClass: CourierMailAccount
objectClass: CourierMailAlias
objectClass: tardisAccount
objectClass: shadowAccount
loginShell: /bin/bash
userPassword: e1NTSEF9REk3MnhNZ2I0QXRmNndQZDhyWjN1Y0hDOVNxYXNmRDYK # jdoe
uidNumber: 10000
quota: 10000000S
sponsors: Jim Doe
gidNumber: 1005
gecos: John Doe
homeDirectory: /home/jdoe
mail: jdoe@tardis.ed.ac.uk
mailbox: jdoe
externalEmail: john.doe@acme.inc
homePhone: 091231021
homePostalAddress: 20 George Square, Edinburgh
```