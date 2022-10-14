# Linked List (Code Challenge 10)
<!-- Short summary or background information -->
Create a small application that creates a stack or nodes. This values can be changes from various methods that can be envoked. 

## Challenge
<!-- Description of the challenge -->
Using a Linked List as the underlying data storage mechanism. Implement this in a stack and a queue.

1. Create seperate classes that share the same node class
2. Create a bunch of methods to manipulate the linked lists
3. Create tests to proof the written code

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I created the methods first, then implimented the testing after the fact. Divided both of the classes up to clean up the code.

## API
<!-- Description of each method publicly available to your Linked List -->
1. push (adds a value to the linked list (stack only))
2. pop (removes the node in the front of the list (stack only))
3. peek (looks at the number in the head of the list)
4. isEmpty (checks if the node is null)
5. enqueue (adds a value to the linked list (queue only)
6. dequeue (removes the node in the front of the list (queue only)

## Checklist (Features)

### Node

- [x] Create a Linked List class
    - [x] Include <code>{value, next}</code>
 
### Stack

- [x] Create a Stack class that has a top property. It creates an empty Stack when instantiated.
  - [x] This object should be aware of a default empty value assigned to <code>top</code> when the stack is created.
   - [x] The class should contain the following methods:
  - [x] push
    - [x] Arguments: value
    - [x] Adds a new node with that value to the <code>top</code> of the stack with an O(1) Time performance.
  - [x] pop
    - [x] Arguments: none
    - [x] Returns: the value from node from the top of the stack
    - [x] Removes the node from the top of the stack
    - [x] Should raise exception when called on empty stack
  - [x] peek
    - [x] Arguments: none
    - [x] Returns: Value of the node located at the top of the stack
    - [x] Should raise exception when called on empty stack
  - [x] is empty
    - [x] Arguments: none
    - [x] Returns: Boolean indicating whether or not the stack is empty.

### Queue

  - [x] Create a Queue class that has a front property. It creates an empty Queue when instantiated.
    - [x] This object should be aware of a default empty value assigned to <code>front</code> when the queue is created.
    - [x] The class should contain the following methods:
    - [x] enqueue
      - [x] Arguments: value
      - [x] adds a new node with that value to the <code>back</code> of the queue with an O(1) Time performance.
    - [x] dequeue
      - [x] Arguments: none
      - [x] Returns: the value from node from the front of the queue
      - [x] Removes the node from the front of the queue
      - [x] Should raise exception when called on empty queue
    - [x] peek
      - [x] Arguments: none
      - [x] Returns: Value of the node located at the front of the queue
    - [x] Should raise exception when called on empty stack
  - [x] is empty
    - [x] Arguments: none
    - [x] Returns: Boolean indicating whether or not the queue is empty

## Checklist (Tests)

- [x] Can successfully push onto a stack
- [x] Can successfully push multiple values onto a stack
- [x] Can successfully pop off the stack
- [x] Can successfully empty a stack after multiple pops
- [x] Can successfully peek the next item on the stack
- [x] Can successfully instantiate an empty stack
- [x] Calling pop or peek on empty stack raises exception
- [x] Can successfully enqueue into a queue
- [x] Can successfully enqueue multiple values into a queue
- [x] Can successfully dequeue out of a queue the expected value
- [x] Can successfully peek into a queue, seeing the expected value
- [x] Can successfully empty a queue after multiple dequeues
- [x] Can successfully instantiate an empty queue
- [x] Calling dequeue or peek on empty queue raises exception
