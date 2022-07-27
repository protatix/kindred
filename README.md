# Address Book
This small address book web site has three pages.

1. First page should allow the user to input up to 50 names and phone numbers at a
time (so the user can input several batches of numbers, but limited to 50 at a time.
Assume that there will never be more than 300 names/numbers in total). Name is
tied to only one phone number. Names should be validated to be only letters and
blanks, phone numbers should be validated to contain only numbers, with an
optional + prefix and possibly one pair of brackets. The phone number must start
either with a + or a 0. If it starts with a +, it cannot be followed by a 0.
These are valid phone numbers:
02012345567
+443739182931
+44(0)203739182
These are not valid phone numbers:
1322282828 (does not start with a 0 or +)
020-10391-20201 (has non-numeric characters)
+01029818 (starts with + followed by 0)
+44(0)202839(4)3932 - more than one pair of brackets
The names and phone numbers should be stored in memory


2. Second page should list all stored numbers and names, sorted alphabetically.
3. Third page should allow a user to search the address book by phone number (exact
number, not substrings) and by full name or part of a name. It should display all
matching names and related phone numbers for the search criteria.

## Installation
```
yarn install
```

## Start - Server
```yarn dev:server```


## Start - Client
```yarn dev:client```
