// console.log('path module')

import path from 'path';

// join two or more file

const fullPath = path.join('./path', 'index.py','file.java')

// console.log("file join =>",fullPath);

// absolute path

const absolutePth = path.resolve();

// console.log('we are currently working on =>',absolutePth)

// extension name

const extName = path.extname('resume.txt')

console.log("extname =>",extName)

if(extName == '.pdf'){
    console.log("ok");
}else{
    console.log("not supported");
}