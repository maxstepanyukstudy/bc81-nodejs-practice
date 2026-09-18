import path from "node:path";
import fs from "node:fs";
// const fsPromises = fs.promises;
import * as fsPromises from "node:fs/promises";

const ENCODING = "utf-8";

const message = "Hello world";
console.log(message);

// path

const pathToWorkDir = path.join(process.cwd());
console.log(pathToWorkDir);

const filePath = path.join(pathToWorkDir, "src", "demo.txt");
console.log(filePath);

const readmePathParse = path.parse(filePath);
console.log(readmePathParse);

// fs  read

const bufferSync = fs.readFileSync(filePath);
console.log(bufferSync);

const bufferSyncDecoded = fs.readFileSync(filePath, ENCODING);
console.log(bufferSyncDecoded);

const buffer = await fsPromises.readFile(filePath);
console.log(buffer);

const data = await fsPromises.readFile(filePath, ENCODING);
console.log(data);

// fs re-create with data

const text1 = "Text1";

const tempPathA = path.join(pathToWorkDir, "tempA.txt");
const tempPathB = path.join(pathToWorkDir, "tempB.txt");

fs.writeFileSync(tempPathA, text1, ENCODING);
await fsPromises.writeFile(tempPathB, text1, ENCODING);

// add to file

const text2 = "Text2";
await fsPromises.appendFile(tempPathA, text2);

// rename file

const tempPathANew = path.join(pathToWorkDir, "tempANew.txt");
await fsPromises.rename(tempPathA, tempPathANew);

// delete

await fsPromises.unlink(tempPathANew);
await fsPromises.unlink(tempPathB);

// buffer

console.log(buffer.toString(ENCODING));
