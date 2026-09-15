const fs = require("fs");
const path = require("path");

// Create the path of student.txt
const filePath = path.join(__dirname, "data", "student.txt");

// Read the file
fs.readFile(filePath, "utf8", (err, data) => {

    // Handle error
    if (err) {
        console.log("Error reading file:", err.message);
        return;
    }

    // Display student details
    console.log("Student Details:");
    console.log(data);

    // Display file name
    console.log("File Name:", path.basename(filePath));

    // Display directory
    console.log("Directory:", path.dirname(filePath));

    // Display file extension
    console.log("File Extension:", path.extname(filePath));
});