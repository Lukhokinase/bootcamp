//calling it from html
let show = document.querySelector(".Myimage")

//listing all the pictures
    let Myimages ; if(localStorage.getItem("Myimages")){Myimages = JSON.parse(localStorage.getItem("Myimages"))} else {
        Myimages = [
            "50 cent 1.jpeg",
            "50 cent 2.jpg",
            "50 cent 3.jpg",
            "download1.jpeg",
            "OIP.jpeg"
            
        ];
    }
    



//start at the first,, used to incriment
let currentImage = 0;
//refresing to show ,, must be equal to zero
let number = document.querySelector('.Myimage');
//number.innerHTML = 1
//show.src = Myimages[currentImage];

function save(){
    let img = document.querySelector('.file').value;
    // console.log(img in Myimages)
    let check = Myimages.some(ele => ele == img)
    if(!img){
        alert("INSERT PICTURE")
    } else if(check){
        alert("This is a duplicate")
    }else {
    Myimages.push(img)
    localStorage.setItem("Myimages",JSON.stringify(Myimages))
    console.log(img);}
    
}




function nextImage(){
    
    currentImage++;


//to stop it from being undifined if it goes over...length being the last
    if (currentImage >= Myimages.length){
        currentImage = 0;
        
    }
    number.src = Myimages[currentImage];  
}

function prevImage(){
    //decriment going down
    currentImage--
    
//not less the zero.. prevent being undifined
    if(currentImage < 0){
        currentImage = Myimages.length-1;
       
    }
    number.src = Myimages[currentImage];
}


function del(){
    Myimages.splice(currentImage,1)
    localStorage.setItem("Myimages",JSON.stringify(Myimages))
}