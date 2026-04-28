# Pseudocode Plan Website 

### BEGIN 1.0 Quiz Application
    SET quizData TO [Scenario 1,2, 3, 4, 5]
    SET state TO {currentIndex: 0, score: 0, canAnswer: TRUE}
    SET ui TO { DOM elements}

    CALL 1.11 init()
END 1.0 Quiz Application

--------------------------------------------

### BEGIN 1.1 Run Quiz Iteration
    INCREMENT state.currentIndex
    IF state.currentIndex < LENGTH(quizData) THEN
        CALL 1.11 init()
    ELSE
        CALL 1.2 Final Report
    ENDIF
END 1.1 Run Quiz Iteration

--------------------------------------------

### BEGIN 1.11 init
    SET state.canAnswer TO TRUE
    SET data TO quizData[state.currentIndex]

    DISPLAY data.title
    SET ui.progress TO (state.currentIndex / LENGTH(quizData)) * 100
    HIDE ui.nextButton
    HIDE ui.hintBox
    CLEAR ui.optionsContainer

    FOR EACH option, i IN data.options
        CREATE card
        SET card.text TO option
        card.onclick CALL 1.12 handleChoice(i, card)
        APPEND card TO ui.optionsContainer
    ENDFOR
END 1.11 init

--------------------------------------------

### BEGIN 1.12 handleChoice(index, element)
    IF state.canAnswer == FALSE THEN
        EXIT MODULE
    ENDIF

    SET state.canAnswer TO FALSE
    SET correctIndex TO quizData[state.currentIndex].correct

    IF index == correctIndex THEN
        ADD "correct" TO element.classList
        INCREMENT state.score
    ELSE
        ADD "incorrect" TO element.classList
        ADD "missed" TO ui.optionsContainer.children[correctIndex]
    ENDIF

    DISPLAY quizData[state.currentIndex].hint
    SHOW ui.hintBox
    SHOW ui.nextButton
END 1.12 handleChoice

--------------------------------------------

### BEGIN 1.2 Final Report
    CALL 1.21 showReport()
END 1.2 Final Report

--------------------------------------------

### BEGIN 1.21 showReport
    HIDE ui.quizView
    SHOW ui.reportView
    SET percent TO (state.score / LENGTH(quizData)) * 100
    SET rank TO CALL 1.22 calculateRank(percent)
    DISPLAY rank, state.score, LENGTH(quizData)
END 1.21 showReport

--------------------------------------------

### BEGIN 1.22 calculateRank(percent)
    IF percent == 100 THEN RETURN "A+"
    ELSE IF percent >= 90 THEN RETURN "A"
    ELSE IF percent >= 80 THEN RETURN "B"
    ELSE IF percent >= 70 THEN RETURN "C"
    ELSE IF percent >= 60 THEN RETURN "D"
    ELSE RETURN "F"
END 1.22 calculateRank

--------------------------------------------


