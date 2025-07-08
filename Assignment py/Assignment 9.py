temperatures = [30, 32, 28, 35, 33, 31, 29]

# Hottest and Coldest days
print("Hottest temperature:", max(temperatures))
print("Coldest temperature:", min(temperatures))

# Average temperature
avg_temp = sum(temperatures) / len(temperatures)
above_avg_days = [temp for temp in temperatures if temp > avg_temp]
print("Days above average temperature:", above_avg_days)

# List slicing
print("First 3 days' temperatures:", temperatures[:3])
print("Last 2 days' temperatures:", temperatures[-2:])
