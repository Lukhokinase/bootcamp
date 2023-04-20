let item1 = document.querySelector(".input2")
let item = document.querySelector(".input")
let total = []


function Add(){

    let a=item.value
    let b =item1.value
    if(!item || !item1){
    alert("INSERT AN ITEM")
   } else {
   document.querySelector(".item1").innerHTML
   += a + " " + b +` 
   <button onclick="Del()"> Delete</button><button> Edit</button>`}
   total.push({a,b})
   console.log(total)
    
}

function Del(){
    
}


