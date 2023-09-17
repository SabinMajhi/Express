// // // console.log('app.js')
// // const add=(a,d)=>{
// //   return a=d;
// // }
// // const result=add(1,2);
// // console.log(result);

//  const calculate=require('./calculate');
// console.log(calculate.add(2,3));
// console.log(calculate.subtract(2,3));
// console.log(calculate.multiply(2,3));
// console.log(calculate.division(2,3));

// const fs=require('fs');
// fs.readFile('sabin.text','utf8',(err,data)=>{
//   if(err){
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/users', (req, res) =>{
    const users=[
        {id:1, name: 'john'},
        {id:2, name: 'jane'},
        {id:3, mname: 'Bob'}
    ];
    res.json(users);
});
app.get('/users/:id', (req,res)=>{
    const user={id:req.params.id, name:'john'};
    res.json(user);
});


app.listen(port, () =>{
    console.log(`Server listening on port:${port}`);
});



