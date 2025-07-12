b = "Hello, World!"
print(b[2:5])

# By leaving out the start index, the range will start at the first character:

b = "Hello, World!"
print(b[:5])

# By leaving out the end index, the range will go to the end:
b = "Hello, World!"
print(b[2:])

# Use negative indexes to start the slice from the end of the string:

b = "Hello, World!"
print(b[-5:-2])
