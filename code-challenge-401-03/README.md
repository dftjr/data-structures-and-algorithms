# Find a number in an array
We will be given a random array of numbers (could be and even or odd amount) and we must take a random number given to us and must find it in said array. The array we are given will automatically be sorted for us, so the number were receiving can be anything, but this number does not have to be in order of the sort.

<br>

## Whiteboard Process
<img src="array-binary-search.png" alt="Whiteboard" height="800" width="800"/>

<br>

## Approach & Efficiency
The approach we took as a group was to define exactly what the problem domain was and determine how we would get the output. We needed to breakdown the JS built in operator sort(), basically creating that function ourselves. Once we had an idea on how we would write the code, we drew out how it would look if we had to visualize it outside of a text format. In order to be efficient we had to find a way to quickly sort through the array, we determined that having a min and max start from index 0 to whatever the end index is, the slowly check the number given and moving towards the middle of the array to determine if that number exists or not. 
