// Student Management System

const students = [
    { id: 101, name: "Aman", marks: 82, course: "Java" },
    { id: 102, name: "Priya", marks: 95, course: "Python" },
    { id: 103, name: "Rahul", marks: 67, course: "Java" },
    { id: 104, name: "Neha", marks: 76, course: "Web" },
    { id: 105, name: "Rohan", marks: 88, course: "Python" }
];

console.log("Original Student List:");
console.log(students);

// ----------------------------------------------------
// Task 1 : push()
// ----------------------------------------------------

console.log("\n===== Task 1 : push() =====");

students.push({
    id: 106,
    name: "Simran",
    marks: 91,
    course: "Java"
});

console.log(students);

// ----------------------------------------------------
// Task 2 : pop()
// ----------------------------------------------------

console.log("\n===== Task 2 : pop() =====");

let removedLast = students.pop();

console.log("Removed Student:");
console.log(removedLast);

// ----------------------------------------------------
// Task 3 : unshift()
// ----------------------------------------------------

console.log("\n===== Task 3 : unshift() =====");

students.unshift({
    id: 100,
    name: "Ankit",
    marks: 80,
    course: "Web"
});

console.log(students);

// ----------------------------------------------------
// Task 4 : shift()
// ----------------------------------------------------

console.log("\n===== Task 4 : shift() =====");

let removedFirst = students.shift();

console.log("Removed Student:");
console.log(removedFirst);

// ----------------------------------------------------
// Task 5 : splice()
// ----------------------------------------------------

console.log("\n===== Task 5 : splice() =====");

let index = students.findIndex(student => student.id === 103);

students.splice(index, 1, {
    id: 107,
    name: "Karan",
    marks: 78,
    course: "Java"
});

console.log(students);

// ----------------------------------------------------
// Task 6 : slice()
// ----------------------------------------------------

console.log("\n===== Task 6 : slice() =====");

const firstThree = students.slice(0, 3);

console.log(firstThree);

// ----------------------------------------------------
// Task 7 : for...of
// ----------------------------------------------------

console.log("\n===== Task 7 : for...of =====");

for (let student of students) {
    console.log(`${student.name} - ${student.course} - ${student.marks}`);
}

// ----------------------------------------------------
// Task 8 : forEach()
// ----------------------------------------------------

console.log("\n===== Task 8 : forEach() =====");

students.forEach(function(student) {
    console.log(student.name);
});

// ----------------------------------------------------
// Task 9 : map()
// ----------------------------------------------------

console.log("\n===== Task 9 : map() =====");

const studentNames = students.map(student => student.name);

console.log(studentNames);

// ----------------------------------------------------
// Task 10 : filter()
// ----------------------------------------------------

console.log("\n===== Task 10 : filter() =====");

const highScorers = students.filter(student => student.marks >= 80);

console.log(highScorers);

// ----------------------------------------------------
// Task 11 : reduce()
// ----------------------------------------------------

console.log("\n===== Task 11 : reduce() =====");

const totalMarks = students.reduce(function(total, student) {
    return total + student.marks;
}, 0);

const averageMarks = totalMarks / students.length;

console.log("Total Marks =", totalMarks);
console.log("Average Marks =", averageMarks);

// ----------------------------------------------------
// Task 12 : sort()
// ----------------------------------------------------

console.log("\n===== Task 12 : sort() =====");

// Ascending
let ascending = [...students];

ascending.sort((a, b) => a.marks - b.marks);

console.log("Ascending Order:");
ascending.forEach(student => console.log(student.marks));

// Descending
let descending = [...students];

descending.sort((a, b) => b.marks - a.marks);

console.log("\nDescending Order:");
descending.forEach(student => console.log(student.marks));