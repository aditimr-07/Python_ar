students = {
    "John": 85,
    "Alice": 92,
    "Bob": 78
}

# Add a new student
students["Emily"] = 88

# Average grade
average = sum(students.values()) / len(students)
print("Average Grade:", average)

# Top performer
top_student = max(students, key=students.get)
print("Top Performer:", top_student, "with grade", students[top_student])
