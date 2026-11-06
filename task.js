
console.log('---------- MARKSHEET ----------');

var totalMarks = 500;

var classs = +prompt('Enter Your Class');
var eng = +prompt('Enter Your English Marks');
var maths = +prompt('Enter Your Maths Marks');
var comp = +prompt('Enter Your Computer Science Marks');
var isl = +prompt('Enter Your Islamiat Marks');
var urdu = +prompt('Enter Your Urdu Marks');

var obtainedMarks = eng + maths + comp + isl + urdu;
var percentage = (obtainedMarks * 100) / totalMarks;

var grade = '';

if (percentage >= 90 && percentage <= 100) {
    grade = 'A';
}
else if (percentage >= 80) {
    grade = 'B';
}
else if (percentage >= 70) {
    grade = 'C';
}
else if (percentage >= 60) {
    grade = 'D';
}
else if (percentage >= 50) {
    grade = 'E';
}
else {
    grade = 'Failed';
}

console.log('---------- RESULT ----------');

console.log(`Your Class is: ${classs}`);
console.log(`Total Marks: ${totalMarks}`);
console.log(`Obtained Marks: ${obtainedMarks}`);
console.log(`Your Percentage is: ${percentage}%`);
console.log(`Your Grade is: ${grade}`);

alert(`---------- MARKSHEET ----------
Your Class: ${classs}
Total Marks: ${totalMarks}
Obtained Marks: ${obtainedMarks}
Percentage: ${percentage}%
Grade: ${grade}`);
