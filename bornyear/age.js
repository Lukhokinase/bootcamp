function calcAge() {
    let bornyear = document.getElementById("bornYear").value;
    let a = new Date()
    let year = a.getFullYear();

    let x = (year - bornyear);

    let results = document.getElementById("results")
    results.innerHTML = x
    
    sessionStorage.setItem("calc",JSON.stringify(y))

    if (!bornyear){
        results.innerHTML = ("Please enter your born year")
    }
    else if (bornyear < 0){
        results.innerHTML = ("Born year can not be less than 0")
    }
    else if(bornyear > 1900){
        results.innerHTML = ("Please enter year above 1900")
    }
    else if(bornyear > year){
        results.innerHTML = ("Born Year should be less or equal to current year")
    } else {
        results.innerHTML =(x)
    }


}