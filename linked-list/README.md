# Linked List (Code Challenge 05)
<!-- Short summary or background information -->
Create a small test application that lets you create and test the functionality of a linked list.

## Challenge
<!-- Description of the challenge -->
The application should create an empty Linked List that is able to take in new values and return them. The application must do the following things:

1. Insert a number into the linked list
2. search for a number inside the linked list
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
