# Linked List (Code Challenge 05)
<!-- Short summary or background information -->
Create a small test application that lets you create and test the functionality of a linked list. This linked list will hold numbers based on the methods added to this application.

## Challenge
<!-- Description of the challenge -->
The application should create an empty Linked List that is able to take in new values and return them. The application must do the following things:

1. Insert a number into the linked list
2. Search for a number inside the linked list
3. Return all the values inside of the linked list in a <code>string</code> format

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I created the methods first, then implimented the testing after the fact.

## API
<!-- Description of each method publicly available to your Linked List -->
1. insert (adds a number to the list)
2. include (finds a number in the list)
3. toString (returns all the values via a string)

## Checklist (Features)

- [x] Create a Linked List class
- [x] Within your Linked List class, include a head property.
  - [x] Upon instantiation, an empty Linked List should be created.
- [x] The class should contain the following methods
  - [x] insert
    - [x] Arguments: value
    - [x] Returns: nothing
    - [x] Adds a new node with that value to the head of the list with an O(1) Time performance.
  - [x] includes
    - [x] Arguments: value
    - [x] Returns: Boolean
    - [x] Indicates whether that value exists as a Node’s value somewhere within the list.
  - [x] to string
    - [x] Arguments: none
    - [x] Returns: a string representing all the values in the Linked List, formatted as:
    - [x] <code>"{ a } -> { b } -> { c } -> NULL"</code>

## Checklist (Tests)

- [x] Can successfully instantiate an empty linked list
- [x] Can properly insert into the linked list
- [x] The head property will properly point to the first node in the linked list
- [x] Can properly insert multiple nodes into the linked list
- [x] Will return true when finding a value within the linked list that exists
- [x] Will return false when searching for a value in the linked list that does not exist
- [x] Can properly return a collection of all the values that exist in the linked list

<br>

# Linked List (Code Challenge 06)
<!-- Short summary or background information -->
Add new methods to the original Linked List challenge.

## Challenge
<!-- Description of the challenge -->
Add additional methods to the previous challenge to help modify the list even more. This challene will involve adding numbers at the end of a list and finding certain numbers while adding new number before and/or after that searched number.

1. Insert a number to the end of the list
2. Search for a number inside the linked list, add a number before that found number
3. Search for a number inside the linked list, add a number after that found number

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I created the methods first, then implimented the testing after the fact. Requested some help from TA's to get the methods correct.

## API
<!-- Description of each method publicly available to your Linked List -->
1. insert (adds a number to the list)
2. include (finds a number in the list)
3. toString (returns all the values via a string)
4. append (adds a number to the end of the list)
5. insertBefore (finds a number in the list, adds a new number before the found number)
6. insertAfter (finds a number in the list, adds a new number after the found number)

## Checklist (Features)

- [x] Write the following methods for the Linked List class:
  - [x] append
    - [x] Arguments: new value
    - [x] Adds a new node with the given <code>value</code> to the end of the list
  - [x] insert before
    - [x] Arguments: value, new value
    - [x] Adds a new node with the given new value immediately before the first node that has the value specified
  - [x] insert after
    - [x] Arguments: value, new value
    - [x] Adds a new node with the given new value immediately after the first node that has the value specified

## Checklist (Tests)

- [x] Can successfully add a node to the end of the linked list
- [x] Can successfully add multiple nodes to the end of a linked list
- [x] The head property will properly point to the first node in the linked list
- [ ] Can successfully insert a node before a node located i the middle of a linked list
- [x] Can successfully insert a node before the first node of a linked list
- [ ] Can successfully insert after a node in the middle of the linked list
- [x] Can successfully insert a node after the last node of the linked list

<br>

# Linked List (Code Challenge 07)
<!-- Short summary or background information -->
Add new method to the original Linked List challenge.

## Challenge
<!-- Description of the challenge -->
Add additional method to the previous challenge to help modify the list even more. Create a method that takes a number and see if that node exists in the linked list. If there is a node, return the value inside of it. If the number requested does not exit (linked list is smaller than number requested) return a false.

1. Take a number, search the link list for that node value, return the value inside the node

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I created the method first, then implimented the testing after the fact.

## API
<!-- Description of each method publicly available to your Linked List -->
1. insert (adds a number to the list)
2. include (finds a number in the list)
3. toString (returns all the values via a string)
4. append (adds a number to the end of the list)
5. insertBefore (finds a number in the list, adds a new number before the found number)
6. insertAfter (finds a number in the list, adds a new number after the found number)
7. kthFromEnd (take a value and see if that node exists, return its value)

## Checklist (Features)

- [x] Write the following methods for the Linked List class:
  - [x] kth from end
    - [x] Argument: a number, <code>k</code>, as a parameter.
    - [x] Return the node’s value that is <code>k</code> places from the tail of the linked list.
    - [x] You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Checklist (Tests)

- [x] Where k is greater than the length of the linked list
- [x] Where k and the length of the list are the same
- [ ] Where k is not a positive integer
- [x] Where the linked list is of a size 1
- [x] “Happy Path” where k is not at the end, but somewhere in the middle of the linked list
