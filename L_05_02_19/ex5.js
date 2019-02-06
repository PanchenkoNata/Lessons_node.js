const fs = require('fs-extra');
const filePath = 'D:/Work_Proga/ProCode/Node_js/Lessons_node.js/L_05_02_19/ex2.js';//path to the file
const copyFilePath = 'D:/Work_Proga/ProCode/Node_js/Lessons_node.js/L_05_02_19/ex3.js';//when do you want to copy

fs.copy(filePath, copyFilePath);


// fs.copy(filePath, copyFilePath, () => {});