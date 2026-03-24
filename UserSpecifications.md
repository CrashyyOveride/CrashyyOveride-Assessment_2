### User Specifications

__Immediate Feedback Loop__

The system must use DOM manipulation to change UI elements (colors/text) immediately upon user interaction, ensuring the student learns from mistakes in real-time.


__Action when answer = wrong__

--> The solution you picked will turn red

--> The correct answer will turn green

--> At the bottom of the box, it will provide a explanation (× SYNTAX ERROR -- "explanation")


__Action when answer = right__

--> The solution you picked will turn green

--> The wrong answer will turn red 

--> At the bottom of the box, it will provide a explanantion (✓ LOGIC VERIFIED -- "Standard syntax confirmed")

--> It enables UX (  It enables neat and formated correct answers  )


__Storage Mechanism__

Results must be pushed into a Global Array. This allows the system to analyze which specific topics the user failed.

__User Interface (UI)__

The interface must be "distraction-free," utilizing a dark-themed container to reduce eye strain, similar to professional Visual Studio Code environments.

__Input Handling__

The system must respond to both Click Events (for multiple choice) and Keyboard Events (for navigation), making it accessible for different user preferences.
