let item1 = document.querySelector(".input2")
let item = document.querySelector(".input")
let total ; 
// if(localStorage.getItem("array")){
//     total = JSON.parse(total)
// } else{
//     total = []
// }
let z = JSON.parse(localStorage.getItem("array"))
let tot = 0;
// z.map((x,y) => {
//     tot = x.b + x.b;
    
//     return console.log(x.a, x.b) 

// })
// let initialValue = 0
// tot = z.reduce((x,y)=>{
//     console.log(typeof(x.b), typeof(y.b))
//     return x.b + y.b;
// })
// console.log(tot)





function add(){

    let a=item.value
    let b =item1.value
    if(!item && !item1){
     return alert("INSERT AN ITEM") 
   } else {
   document.querySelector(".item1").innerHTML
   += "<div>"+ "<p class='prod w' >" + a + "</p>" +"<p class='price w'>" +b + "</p>" +`
   <button onclick="del(this)"> Delete</button><button onclick="edit(this)" > Edit</button>` + `</div>`
   total.push({a,b})
   localStorage.setItem("array",JSON.stringify(total))
   console.log(total)}
   document.querySelector(".input2").value=""
    document.querySelector(".input").value=""

    
}

function del(e){
    e.parentElement.remove()

    
}

function edit(e){
 let i = document.querySelector(".w")

let update = prompt("Update", );
let a = i.parentElementSibling;
e.parentElement[1].innerHTML = update
console.log(e.parentElement.childNodes[0].innerHTML = update)
 
    
    //  e.parentElement.childNodes[0].contentEditable="true";
    //  e.parentElement.childNodes[1].contentEditable="true";
    

    //console.log(e.parentElement.childNodes[1])
// let c = item.value
// let d = item1.value

// c.contentEditable= "true"
// d.contentEditable= "true"
}









