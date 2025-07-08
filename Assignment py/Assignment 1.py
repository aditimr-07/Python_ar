def remove_duplicates(lst):
    seen = set()
    result = []
    for item in lst:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

# Example usage:
original_list = [4, 5, 2, 4, 2, 3, 5]
print(remove_duplicates(original_list))  # Output: [4, 5, 2, 3]
