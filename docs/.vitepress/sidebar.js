var fs = require("fs");

let nameList = [
  "javascript/base",
  "javascript/tools/Array",
  "javascript/tools/Date",
  "leetcode/BinarySearch/easy",
  "leetcode/DynamicProgramming/easy",
  "leetcode/GreedyAlgorithm/easy",
  "leetcode/GreedyAlgorithm/mid",
  "css",
];
let sideBarObject = {};
for (let name of nameList) {
  console.log(name);
  let arr = [];
  fs.readdir(`./docs/${name}`, (err, files) => {
    files
      .filter((i) => i !== "index.md")
      .map((item) => {
        arr.push({
          text: item.split(".md")[0],
          link: `/${name}/` + item.split(".md")[0],
        });
      });
  });
  sideBarObject[name] = arr;
}
console.log(sideBarObject);

const sidebar = {
  "/javascript/tools": [
    {
      text: "javascript-tools-Array",
      items: sideBarObject["javascript/tools/Array"],
      collapsible: true,
    },
    {
      text: "javascript-tools-Date",
      items: sideBarObject["javascript/tools/Date"],
      collapsible: true,
    },
  ],
  "/javascript/base": [
    {
      text: "javascript-base",
      items: sideBarObject["javascript/base"],
      collapsible: true,
    },
  ],
  "/leetcode/BinarySearch": [
    {
      text: "BinarySearch-easy",
      items: sideBarObject["leetcode/BinarySearch/easy"],
      collapsible: true,
    },
  ],
  "/leetcode/DynamicProgramming": [
    {
      text: "DynamicProgramming-easy",
      items: sideBarObject["leetcode/DynamicProgramming/easy"],
      collapsible: true,
    },
  ],
  "/leetcode/GreedyAlgorithm": [
    {
      text: "GreedyAlgorithm-easy",
      items: sideBarObject["leetcode/GreedyAlgorithm/easy"],
      collapsible: true,
    },
    {
      text: "GreedyAlgorithm-mid",
      items: sideBarObject["leetcode/GreedyAlgorithm/mid"],
      collapsible: true,
    },
  ],
  "/css": [
    {
      items: sideBarObject["css"],
    },
  ],
};

export default sidebar;
