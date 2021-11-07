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

## Usertools

The [TARDIS usertools](https://github.com/tardisproject/usertools) are some python scripts we use for common tasks.
These are only really for admins, but are documented here anyways

### `tardis adduser <username>`

1. Creates the user (interactively)
2. Add a home directory mapping
3. Email them with their password

### `tardis userinfo`

Gets user information

`-u` searches by username.
`-r` by real name (`cn` in LDAP).
`-i` by numeric uid.

### `tardis lastlog`

Audits last user logins / password hash types (both by default).

Abandonment shows the year that they last logged in (using `lastlog`, so should be done on the ssh gateway)

Password shows the hash type (hopefully not plain).

### `tardis disable-inactive threshold`

Disable users that haven't logged in before or on the threshold year given by moving them to the `DisabledUsers` organisational unit.

If `-n` is specified, users who have never logged in, or for whom lastlog didn't return a valid result, are also disabled.

Will list accounts to be disabled and prompt for confirmation