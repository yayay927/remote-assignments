//request1 click to change text
function changeText(){
  document.getElementById("welcome").innerHTML='Have a Good Time!';
}

//request2 show/close menu
function showMenu (){
  // document.getElementById("welcome").innerHTML='Show Menu!'; //examine bug
  document.getElementById("popMenu").style.display = "block"; //一開始遇到的問題：區塊有跑出來但是內容沒有跑出來
  document.getElementById("popList").style.display = "block"; //發現3個id寫在一起不行，分行寫才出得來
  document.getElementById("closeButton").style.display = "block"; //顯示原本隱藏的物件要寫成display:"block"，而非flex或run-in
}
function closeMenu (){
  // document.getElementById("welcome").innerHTML='Close Menu!'; //examine bug
  document.getElementById("popMenu").style.display = "none";
}

//request3 click to show more boxes
function showMoreBoxes () {
  document.getElementById("more").style.display = "block";
}

document.querySelector('#welcome').addEventListener("click", changeText);
document.querySelector('.menu').addEventListener("click", showMenu);
document.querySelector('.closeButton').addEventListener("click", closeMenu);
document.querySelector('.cta').addEventListener("click", showMoreBoxes); 

//class給CSS用，id給JS用
