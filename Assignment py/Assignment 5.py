# 1. Combine first and last name
first = "John"
last = "Doe"
print("Full Name:", first + " " + last)

# 2. Formatted string
item = "Laptop"
price = 799.99
print(f"The price of {item} is ${price}")

# 3. Convert to uppercase
text = "hello world"
print(text.upper())

# 4. Join list to sentence
words = ['Python', 'is', 'awesome']
sentence = ' '.join(words)
print(sentence)

# 5. Print today's date
from datetime import datetime
today = datetime.now()
print("Today's Date:", today.strftime("%d-%m-%Y"))
