import path from "node:path";

const message = "Hello world";
console.log(message);

const pathToWorkDir = path.join(process.cwd());
console.log(pathToWorkDir);

const readmePath = path.join(pathToWorkDir, "README.md");
console.log(readmePath);

const readmePathParse = path.parse(readmePath);
console.log(readmePathParse);
