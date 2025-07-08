def merge_and_sort(list1, list2):
    merged = list1 + list2
    unique_items = set(merged)
    return sorted(unique_items)

# Example usage:
list1 = [5, 2, 9]
list2 = [2, 7, 1]
print(merge_and_sort(list1, list2))  # Output: [1, 2, 5, 7, 9]
