set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Union
print("Union:", set1 | set2)

# Intersection
print("Intersection:", set1 & set2)

# Difference
print("Difference (set1 - set2):", set1 - set2)

# Symmetric Difference
print("Symmetric Difference:", set1 ^ set2)

# Subset check
print("Is set1 subset of set2?", set1.issubset(set2))

# Modify sets
set1.add(9)
set2.discard(8)

# Final sets
print("Modified set1:", set1)
print("Modified set2:", set2)
