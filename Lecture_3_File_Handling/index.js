import {readFile,writeFile,appendFile,mkdir} from 'fs/promises';

// Read File

const read_file = async (fileName) =>{
    const data = await readFile(fileName, "utf-8");
    console.log(data);
};

// read_file('sample.txt');

// Create file

const create_file = async(fileName,content)=>{
    await writeFile(fileName,content);
    console.log('File create Successfully !');
}

// create_file('App.jsx','This a React File');

// Add content to file

const append_file = async(fileName,content)=>{
    await appendFile(fileName,content);
    console.log("extra content added successfuly!");
};

// append_file('App.jsx', "This is My Extra content" );

//  create folder -directory

const create_dir = async(dir)=>{
await mkdir(dir,{recursive:true});
    console.log('Successfuly Create Your Folder');
};

// create_dir('components');

// src/components/java

create_dir('src/py');