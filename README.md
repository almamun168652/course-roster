# Course Registration


- Add at least 3 Project features
    1. Each student will have 20 hours of credit time, meaning everyone can spend 20 hours to learn multiple courses.
    2. Every student can learn multiple courses at the same time if his or her credit time is left.
    3. The price of every course is given on the card, and you can also see it at the total price. If you enroll multiple courses, you can see the total price of the courses in the total price field.



- Discuss how you managed the state in your assignment project.

    I used React JS as a front-end framework in the course registration application, 
    Where the state has been used 5 times.

    1. After loading the data, it is stored in a state called SetAllCards, and the value of each card within the   allCards is shown on the cards dynamically.

    2. Every student has 20 hours of credit to spend on the course, which is saved for the remaining, 
    And admission to the course will reduce the credit time, which is stored in the remaining. If you enroll in more than one course, there will be no more credit left at once, the remaining will be 0 hours.
    This means that the user cannot enroll in any other course, 
    An alert is given by showing a sweet warning with conditions above this remaining 0 value.

    3. After the students enroll in the course, it is passed on the setBoardCourse, which is being stored in the boardCourse.
    And if you enroll a new course, it is added to the previous course and stored in the board's course.
    and the serial number and name of the course.
    Displaying dynamically in display.
    If a course has already been enrolled, it will no longer be enrolled, conditions checked, a sweet alert displayed and a warning has been given.

    4. The cards show how many hours it will take to learn each course, 
    After enrolling in the course, it 
    Total Credit Hour is displayed, which is stored in boardCredit. 
    And enrolling in multiple courses adds credit time spent on courses and displays it in total credit hour.

    5. To enroll in our courses, we must pay a certain amount of money, which is shown in the form of price on the cards.
    After enrolling in the course, it is kept in setBoardPrice, and it is stored in boardPrice and displayed at the total price.
    If you enroll multiple courses, add the value of price all the courses and show the update price at the total price.

