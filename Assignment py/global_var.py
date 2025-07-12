# Task 2: Global variable counter
counter = 0

def increment():
    global counter
    counter += 1
    print("Counter value:", counter)

# Calling the function three times
increment()
increment()
increment()
