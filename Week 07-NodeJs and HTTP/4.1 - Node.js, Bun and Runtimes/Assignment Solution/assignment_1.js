/*
# Assignments #1 - Create a cli

Create a `command line interface` that lets the user specify a file path and the nodejs process counts the number of words inside it.

```
Input - node index.js /Users/kirat/file.txt
Output - You have 10 words in this file
```

Library to use - https://www.npmjs.com/package/commander
*/

// Logic 
// const fs = require("fs");
// function main(fileName) {
//     fs.readFile(fileName,"utf-8", function(err, data) {
//         // To count spaces
//         let total=0;
//         for(let i=0;i<data.length;i++)
//         {
//             if(data[i] === " ")
//             {
//                 total++;
//             }
//         }
//         console.log(total+1);
        
//     })

// }

// main("a.txt")


// * Using library
const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count_words')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const words = data.split(' ').length;
        console.log(`There are ${words} words in ${file}`);
      }
    });
  });

program.parse();