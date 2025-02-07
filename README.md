# JavaScript NaN Comparison Bug

This repository demonstrates a common JavaScript bug related to comparing NaN (Not a Number) values using the strict equality operator (===).

## The Problem

In JavaScript, NaN is a special value that represents the result of an invalid numerical computation (e.g., dividing zero by zero).

The strict equality operator (===) is intended to check for both value and type equality.  However, when comparing NaN to NaN using this operator, the result is always false, even though NaN is, by definition, unequal to any other value, including itself.  This can lead to unexpected behavior in applications where NaN values might be encountered.