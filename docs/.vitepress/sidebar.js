var fs = require("fs");

let nameList = [
  "javascript/base",
  "javascript/tools/Array",
  "javascript/tools/Date",
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
};

export default sidebar;
