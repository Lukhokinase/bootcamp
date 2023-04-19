function calcAge() {
    let bornyear = document.getElementById("bornYear").value;
    let a = new Date()
    let year = a.getFullYear();

    let x = (year - bornyear);

    let results = document.getElementById("results")
    results.innerHTML = x
    
    sessionStorage.setItem("calc",JSON.stringify(y))

    if (!bornyear){
        return results.innerHTML = ("Please enter your born year")
    }
    else if (bornyear < 0){
        results.innerHTML = ("Born year ca")
    }


}