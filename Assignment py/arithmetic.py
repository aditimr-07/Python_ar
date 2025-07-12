# Task 1: Arithmetic and Comparison
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# Arithmetic Operations
print("Sum:", num1 + num2)
print("Difference:", num1 - num2)
print("Product:", num1 * num2)
print("Division:", num1 / num2 if num2 != 0 else "Cannot divide by zero")
print("Remainder:", num1 % num2 if num2 != 0 else "Cannot find remainder with zero")

# Comparison
if num1 > num2:
    print("The first number is greater.")
elif num1 < num2:
    print("The second number is greater.")
else:
    print("Both numbers are equal.")
