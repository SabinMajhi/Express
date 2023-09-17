const add=(a,b)=>{
  return a+b;
}
const subtract=(a,b)=>{
  return a-b;
}

  const multiply=(a,b)=>{
    return a*b;
   }
const division=(a,b)=>{
  return a/b;
}

module.exports={
  add,
  subtract,
  multiply,
  division
}

// const fs=require('fs');
// fs.readFile('sabin.text','utf8',(err,data)=>{
//   if(err){
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });