const fs = require("node:fs/promises");
const path = require("node:path");

async function readData() {
  const data = await fs.readFile(
    path.join(__dirname, "..", "events.json"),
    "utf8"
  );
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile(
    path.join(__dirname, "..", "events.json"),
    JSON.stringify(data)
  );
}

exports.readData = readData;
exports.writeData = writeData;
