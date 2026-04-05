const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./public/PHOTOS";
const outputDir = "./public/OPTIMIZED";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function processImages(dir, outDir) {
  fs.readdirSync(dir).forEach((file) => {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(outDir, file);

    if (fs.lstatSync(inputPath).isDirectory()) {
      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
      }
      processImages(inputPath, outputPath);
    } else {
      const ext = path.extname(file).toLowerCase();

      if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
        const newFile = outputPath.replace(ext, ".webp");

        sharp(inputPath)
          .resize({
            width: 800,
            withoutEnlargement: true,
          })
          .webp({
            quality: 30,
            effort: 6,
          })
          .toFile(newFile)
          .then(() => console.log("✅", newFile))
          .catch(err => console.log("❌", err));
      }
    }
  });
}

processImages(inputDir, outputDir);