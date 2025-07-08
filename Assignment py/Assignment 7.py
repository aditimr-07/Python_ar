product_info = ("Pen", 10, 5)

# Unpacking
product, price, quantity = product_info
total_cost = price * quantity
print("Total Cost:", total_cost)

# Convert to list to modify quantity
product_list = list(product_info)
product_list[2] = 10  # Update quantity

# Convert back to tuple
updated_product_info = tuple(product_list)
print("Updated Product Info:", updated_product_info)
