// Populate the scores array with grades
const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60, 45]

// Create a grades object with letter grade properties but with empty quantities
const grades = {"A": 0,"B": 0,"C":0,"D":0,"F":0} 

// set lowestScore to the highest score possible - this will change to the next score and then be used as a comparison 
let lowestScore=100

// set highestScore to the lowest score possible - this will change to the next score and then be used as a comparison
let highestScore=0

// set fequentGradeNum to 0 which will be changed in first comparison
let frequentGradeNum = 0

// set the frequentGrade (letter) to blank but will be changed in first comparison
let frequentGrade = ""

// set the rareGradeNum to an impossible  score and it will be changed in the first comparison
let rareGradeNum = 10000

// set the rareGrade (letter) to blank but will be changed in the first comparison
let rareGrade = ""

// loop through the values in the scores array
for (let i = 0; i < scores.length; i++) {
    let studentScore=scores[i]

    // check to see if the current score is lower than the current lowest score
    if (studentScore<lowestScore) {
        
        // change the lowest score to the current score
        lowestScore=studentScore
    }

    // check to see if the current score is higher than the current highest score
    if (studentScore>highestScore) {

        // change the highest score to the current score
        highestScore=studentScore
    }

    // convert the current score to a rounded 10 percentile
    let currentScore = (Math.floor(studentScore/10))*10

    // see which letter grade the current score belongs and raise that quantity property in the grades object by 1 then break out of this comparison
    switch (currentScore) {
        case (100):
            grades.A+=1
            break;
        case (90):
            grades.A+=1
            break;
        case (80):
            grades.B+=1
            break;
        case (70):
            grades.C+=1
            break;
        case (60):
            grades.D+=1
            break;
        default:
            grades.F+=1
            break;
    }
}

// loop through the grades object 
for (let key in grades) {

    /* **IMPORTANT LEARN**
    THIS SYNTAX MAY BE THE ONLY WAY TO CAPTURE THE NUMBER VALUE CONTAINED IN THE LETTER PROPERTY */
    let currentLetter = grades[key]
    
    // check to see if the number of the current grade letter is greater than the number contained in the frequentGradeNum
    if (frequentGradeNum<currentLetter) {
        
        // set the new value of frequentGradeNum to each the number value for the letter property in the grades object
        frequentGradeNum=currentLetter
        frequentGrade=key        
    }
    // check to see if the number of the current grade letter is less than the number contained in the rare0GradeNum
    if (rareGradeNum>currentLetter) {
        rareGradeNum=currentLetter
        rareGrade=key
    }
}

// Display all results in the console
console.log("All the scores earned by the students:")
console.log(scores)
console.log(grades) 
console.log("Lowest score: ", lowestScore)
console.log("highest score: ", highestScore)
console.log(frequentGrade+ " was the letter grade most earned ("+frequentGradeNum+" students)" )
console.log(rareGrade+" was the letter grade least earned ("+rareGradeNum+" students)")