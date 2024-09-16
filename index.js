const fs = require("node:fs/promises") // import fs module
const path = require("node:path") // import path module
const fsn = require("node:fs")

const ROOT_PATH = "/home/medaminefh/Downloads"

async function readFiles() {
  const files = await fs.readdir(ROOT_PATH) // absolute path

  // files is an array of file names

  for (const file of files) {
    const extname = path.extname(file).split(".")[1] // hello.txt => .txt => ["", "txt"] => txt
    // ".txt" => ["", "txt"]
    console.log(`${file} => ${extname}`) // hello.txt => .txt (extname)
    if(!extname) continue

    const oldFilePath = path.join(ROOT_PATH, file)
    // hello.txt => /home/medaminefh/Downloads/hello.txt
    const images = ["jpg", "png", "gif", "webp", "jpeg", "svg"]
    const newFilePath = path.join(ROOT_PATH, extname.toUpperCase()) // txt => TXT
    const imagesPath = path.join(ROOT_PATH, "IMAGES")
    if(images.includes(extname)) {
      if (fsn.existsSync(imagesPath)) {
        fs.rename(oldFilePath, path.join(imagesPath, file)) 
        // /home/medaminefh/Downloads/hello.txt => /home/medaminefh/Downloads/IMAGES/hello.txt
        console.log("File renamed successfully!")
      }
      else {
        fs.mkdir(imagesPath)
        fs.rename(oldFilePath, path.join(imagesPath, file))
      }
    }
    else {
      if (fsn.existsSync(newFilePath)) {
        fs.rename(oldFilePath, path.join(newFilePath, file)) 
        // /home/medaminefh/Downloads/hello.txt => /home/medaminefh/Downloads/TXT/hello.txt
        console.log("File renamed successfully!")
      }
      else {
        fs.mkdir(newFilePath)
        fs.rename(oldFilePath, path.join(newFilePath, file))
      }
    }
  }
}

readFiles()