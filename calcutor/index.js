function Ctof(input){
  input = document.getElementById("inpu").value

  let btn = document.getElementById("btn")

  let F = (input*9/5) + 32
  if(F>=0){
    alert("it is extremely hot")
  }
  else if (F>16 && F>=21){
    alert("it is warm")

 }
 
}