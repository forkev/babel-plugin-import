require("@babel/register");
const babel = require("@babel/core");

const result = babel.transform("import { Button } from 'antd-mobile'; console.log(Button)",{
  plugins:[
    [
      require("./src/index"),
      {
        "libraryName": "antd-mobile",
        "style": true,   // or 'css'
      }
    ]
  ]
});

console.log(result.code); // const result = 3;
