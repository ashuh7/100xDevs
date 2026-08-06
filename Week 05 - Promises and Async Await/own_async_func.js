/*
Q: Write a function that

1. Reads the contents of a file
2. Trims the extra space from the left and right
3. Writes it back to the file

*/
// * Approach 1: Callback Approach

const fs = require("fs");
const path = require("path");

function readTrimWrite(filePath) {
    
    // STEP 1: Read the file
    fs.readFile(filePath, "utf-8", function(err, data) {
        if (err) {
            console.log("Error reading file:", err.message);
            return; // stop here if read failed
        }

        // STEP 2: Trim the data
        const trimmedData = data.trim();

        // STEP 3: Write back to file
        fs.writeFile(filePath, trimmedData, function(err) {
            if (err) {
                console.log("Error writing file:", err.message);
                return;
            }
            console.log("Done! File trimmed successfully.");
        });
    });
}

readTrimWrite(path.join(__dirname, "demo_doc.txt"));