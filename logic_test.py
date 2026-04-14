def validate_answer(user_choice, correct_answer):
    if user_choice == correct_answer:
        return True
    else:
        return False

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
    
    print("--- PSEUDOCODE LOGIC LAB: BACKEND TEST ---")
    
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

