def validate_answer(user_choice, correct_answer):
    if user_choice == correct_answer:
        return True
    else:
        return False

print("  ")
print("Test_1 is when User gets 60% on the quiz")
print("  ")

while True:
    user_input = input("Enter the security password to start = ")
    if user_input.lower() == '1234567890':
        break

scenarios = [
    {"title": "Variable Assignment", "correct": 1},
    {"title": "Selection Structure", "correct": 1},
    {"title": "Definite Iteration", "correct": 0},
    {"title": "Array Indexing", "correct": 2},
    {"title": "Boolean Logic", "correct": 1}
]

def run_test():
    score = 0
    total = len(scenarios)
    
    print("--- Test_1 ---")
    
    for i in range(total):
        current = scenarios[i]
        print(f"Testing {current['title']}...")
        is_correct = validate_answer(1, current['correct'])
        if is_correct:
            score += 1
            print("Status: Pass")
        else:
            print("Status: Fail")
    percentage = (score / total) * 100
    print(f"--- TEST COMPLETE: {percentage}% ---")

if __name__ == "__main__":
    run_test()


scenarios = [
    {"title": "Variable Assignment", "correct": 4},
    {"title": "Selection Structure", "correct": 1},
    {"title": "Definite Iteration", "correct": 1},
    {"title": "Array Indexing", "correct": 1},
    {"title": "Boolean Logic", "correct": 1}
]

print("   ")
print("Test_2 is when User gets 80%")
print("   ")

while True:
    user_input = input("Enter the password to start the Test_2 = ")
    if user_input.lower() == '0987654321':
        break

def run_test2():
    score = 0
    total = len(scenarios)
    
    print("--- Test_2 ---")
    
    for i in range(total):
        current = scenarios[i]
        print(f"Testing {current['title']}...")
        is_correct = validate_answer(1, current['correct'])
        if is_correct:
            score += 1
            print("Status: Pass")
        else:
            print("Status: Fail")
    percentage = (score / total) * 100
    print(f"--- TEST COMPLETE: {percentage}% ---")

if __name__ == "__main__":
    run_test()

