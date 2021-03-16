function avg(data){
  // your code here
  const averageNumber = (
    data.products[0].price +
    data.products[1].price +
    data.products[2].price
    )/3

  // show the average price of all products
  return averageNumber;
}

let data = {
    size:3,products:[
      {name:"Product 1",price:100},
      {name:"Product 2",price:700},
      {name:"Product 3",price:250}
    ]
};

avg(data);





//first version
/*
function avg(data){
  // your code here
  const averageNumber = (`${data[0]['price']}` + `${data[1]['price']}` + `${data[2]['price']}`)/3
}
avg({
  size:3,products:[
    {name:"Product 1",price:100},
    {name:"Product 2",price:700},
    {name:"Product 3",price:250}
  ]
});
  // show the average price of all products
return averageNumber;
*/

//second version
/*
function avg(data){
  // your code here
  const averageNumber = (`${data[0]['price']}` + `${data[1]['price']}` + `${data[2]['price']}`)/3

avg({
  size:3,products:[
    {name:"Product 1",price:100},
    {name:"Product 2",price:700},
    {name:"Product 3",price:250}
  ]
});
  // show the average price of all products
return averageNumber;
}
*/
