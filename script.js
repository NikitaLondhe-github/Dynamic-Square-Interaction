let sq1 = document.getElementById("sqr1");
sq1.addEventListener("mouseenter",function(){
    let randomnumber = Math.floor(Math.random()*101);    /*if want 100(included) then *101 otherwisw *100*/ 
    sq1.innerHTML = `<h1>${randomnumber}</h1>`;     /*inner html of sqr1  is '<h1>1</h1>' this is in string  */
})

sq1.addEventListener("mouseleave", function()
{
    sq1.innerHTML = `<h1>1</h1>`;
})

//double click concept 
sq1.addEventListener("dblclick",function(){
  let random1 = Math.floor(Math.random()*256);   
  let random2 = Math.floor(Math.random()*256); 
  let random3 = Math.floor(Math.random()*256);
  sq1.style.backgroundColor = `rgb(${random1} , ${random2} ,${random3})`  ;
})





let sq2 = document.getElementById("sqr2");
let clr = "green";
sq2.addEventListener("mouseenter",function(){
  if(clr == "brown")
  {
    sq2.style.backgroundColor = "brown";
    clr = "lightcoral";
  }
  else if(clr == "lightcoral"){  //clr = "red"
    sq2.style.backgroundColor = "lightcoral";
    clr = "red"; 
  }
  else {
    sq2.style.backgroundColor = "red";
    clr = "brown";   
  }
})

sq2.addEventListener("mouseleave", function()
{
     sq2.style.backgroundColor = "black";
      
})

let sq3= document.getElementById("sqr3");
sq3.addEventListener("mouseenter",function(){
    let random1= Math.floor(Math.random()*256);  /*there are total 256 combinations */
    let random2 = Math.floor(Math.random()*256);
    let random3 = Math.floor(Math.random()*256); 
    
    sq3.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
})

sq3.addEventListener("mouseleave", function()
{
    sq3.style.backgroundColor = "black"
})

let sq4= document.getElementById("sqr4");
sq4.addEventListener("click",function(){
    let random1= Math.floor(Math.random()*256);  /*there are total 256 combinations */
    let random2 = Math.floor(Math.random()*256);
    let random3 = Math.floor(Math.random()*256); 
    
    sq1.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
    sq2.style.backgroundColor = `rgb(${random3},${random1},${random2})`;
    sq3.style.backgroundColor = `rgb(${random2},${random3},${random1})`;
})

sq4.addEventListener("mouseleave", function()
{
    sq1.style.backgroundColor = "black"
    sq2.style.backgroundColor = "black"
    sq3.style.backgroundColor = "black"
})






