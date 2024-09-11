const fs = require("node:fs/promises") // import fs module
const path = require("node:path") // import path module
const fsn = require("node:fs")

async function readFiles() {
  const files = await fs.readdir("/home/medaminefh/Downloads") // absolute path

  // files is an array of file names

  for (const file of files) {
    const extname = path.extname(file).split(".")[1] // hello.txt => .txt
    // ".txt" => ["", "txt"]
    console.log(`${file} => ${extname}`) // hello.txt => .txt (extname)
    if(!extname) continue

    const oldFilePath = path.join("/home/medaminefh/Downloads", file)
    // hello.txt => /home/medaminefh/Downloads/hello.txt
    const images = ["jpg", "png", "gif", "webp", "jpeg", "svg"]
    const newFilePath = path.join("/home/medaminefh/Downloads", extname.toUpperCase()) // txt => TXT  
  }
}

readFiles()