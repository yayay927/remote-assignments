//<second version>

function calculate(args){
  let result;
  if(args.op==="+"){
    result=args.n1+args.n2;
  }else if(args.op==="-"){
    result=args.n1-args.n2;
  }else{
    result="Not supported";
  }return result;
}

let args1 ={
  n1:3,
  n2:4,
  op:"+"
};

let args2 ={}
args2['n1']=3;
args2['n2']=4;
args2['op']="-";

console.log(calculate(args1));
console.log(calculate(args2));


//<first version>
// function calculate(args){
//   let result;
//   if(args.op==="+"){
//     result=args.n1+args.n2;
//   }else if(args.op==="-"){
//     result=args.n1-args.n2;
//   }else{
//     result="Not supported";
//   }return result;
// }
// //first way
// add(n1:3, n2:4);

// //second way
// let args ={
//   n1:3,
//   n2:4
// }

// Try to call calculate function correctly
/*
For example, if we have an add function like this:
    function add(args){
      return args.n1+args.n2;
    }
We can call it by passing an object created by JSONliteral:
  add({n1:3, n2:4}); // your first way
You should apply constructor or class as anotherway to create a proper object.
  add(用類別或建構式產生的物件); // your another way
*/
