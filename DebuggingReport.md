# Development Log

### Project Timeline
The following log documents the weekly evolution of the **Pseudocode Logic Lab**, demonstrating consistent development mastery as per the assessment criteria.


| Week | Date | Commit Message | Key Milestone |
| :--- | :--- | :--- | :--- |
| **Wk 5** | 2 Mar | `Initial commit` | Repository created and SECURITY.md established. |
| **Wk 6** | 4 Mar | `Add requirements definition for logic-validator tool` | Problem definition and User Specs. |
| **Wk 6** | 5 Mar | `Revise section title and clarify grading calculation` | Rank calculation logic and design decisions documented. |
| **Wk 7** | 10 Mar | `STARTED MY WEBSITE - WEEK 1 PUSH CODE` | First structural build of the core application. |
| **Wk 8** | 17 Mar | `Correct CSS syntax and styling for quiz elements` | UI refinement and visual prototype debugging. |
| **Wk 9** | 23 Mar | `Add HTML structure for quiz interface` | Expanding structural elements for modular design. |
| **Wk 9** | 24 Mar | `Implement report view for quiz results` | End-of-session feedback system established. |
| **Wk 9** | 25 Mar | `Add init function to initialize quiz state` | State management and dynamic data rendering. |
| **Wk 10** | 1 Apr | `Remove unnecessary blank lines in HTML file` | Term 1 Final: Code optimization and cleanup. |
| **T2, W1** | 14 Apr | `refactor: modularized system into separate JS/CSS files` | **Current:** Finalizing code split and Python prototype. |
| **T2, W2** | 21 Apr | `fix: final system verification and accessibility check` | **Planned:** Final push before April 29 deadline. |

---

### Control Strategy
*   **Platform:** GitHub (Cloud-based Version Control).
*   **Branching:** Single main branch used for iterative development.
*   **Commit Frequency:** Weekly pushes to validate original work and maintain academic integrity.

# Debugging & Error Correction Report

### 1. Overview
Throughout the development of the **Pseudocode Logic Lab**, several errors were identified across syntax, logic, and runtime categories. Systematic testing was used to identify these issues, and the following resolutions were implemented to ensure the software meets all user specifications and NESA standards.

---

### 2. Error Log


| Error Type | Description of Issue | Impact on System | Resolution |
| :--- | :--- | :--- | :--- |
| **Syntax** | **Template Literal Error:** Dynamic strings in `script.js` were enclosed in single quotes (`'`) instead of backticks (`` ` ``). | The UI displayed raw code (e.g., `${currentIndex}`) instead of the actual question data. | Refactored all dynamic UI updates to use backticks, enabling correct variable interpolation. |
| **Logic** | **Multi-Selection Glitch:** Users were able to click multiple answer cards before moving to the next scenario. | Users could artificially inflate their scores by clicking the correct answer after an initial mistake. | Implemented a `state.canAnswer` Boolean flag that locks the input immediately after the first click. |
| **Runtime** | **DOM Null Reference:** The script was attempting to access HTML IDs before the page had finished loading. | The application failed to initialize, throwing a `null reference` error in the browser console. | Relocated the `<script>` tag to the bottom of `index.html` to ensure the DOM was fully parsed before execution. |
| **Syntax** | **CSS Property Typo:** The property `background-filter` was used instead of `backdrop-filter`. | The "Glassmorphism" visual effect failed to render, resulting in a flat, opaque container background. | Corrected the property to `backdrop-filter: blur(12px)` to ensure hardware-accelerated transparency. |
| **Logic** | **Progress Bar Calculation:** The progress bar logic didn't account for the final state, causing it to stop at 80%. | The user received a visual indication that the quiz was incomplete even when on the final question. | Adjusted the calculation formula in `init()` to properly scale the width based on total array length. |

---

### 3. Summary of Refinement
I spent a lot of time testing the app to make sure it didn't break when a user did something unexpected. The biggest fix was adding the canAnswer lock. Before I added that, a student could just spam-click every button until they got it right, which totally defeats the point of a logic quiz. Now, once you click, you're locked in. I also decided to split my code into three different files (index.html, style.css, and script.js). At first, having everything in one file was okay, but it got messy fast and started causing errors because the browser was trying to run the JavaScript before the HTML was even there. Moving them apart made it way easier to find bugs and made the whole thing run smoother. I also spent like two hours trying to figure out why the progress bar was stuck at 80% on the last question. I realized I was dividing by the array length but starting my index at 0, so the math was just slightly off. It was a tiny fix but really annoying to track down.

