# Unexpected Behavior with Null Arguments in JavaScript Function

This repository demonstrates an uncommon code error in JavaScript where a function exhibits unexpected behavior when null values are passed as arguments.

## Description
The `foo` function is designed to add two numbers. However, it returns null if either argument is null.  This is problematic because the function might be used in scenarios where null values are not handled appropriately, leading to unexpected results or errors.

## Code
The `bug.js` file contains the erroneous code, and `bugSolution.js` provides a corrected version. 

## Solution
The issue is resolved by checking for null values and handling them appropriately. For instance, the function could return 0, throw an error, or use a default value.