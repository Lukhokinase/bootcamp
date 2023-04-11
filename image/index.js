//calling it from html
let show = document.querySelector(".Myimage")

//listing all the pictures
let Myimages = [
    "50 cent 1.jpeg",
    "50 cent 2.jpg",
    "50 cent 3.jpg"
    
];
//start at the first,, used to incriment
let = currentImage = 0;
//refresing to show ,, must be equal to zero
function nextImage(){
    show.src = Myimages[currentImage];
    currentImage++
//to stop it from being undifined if it goes over...length being the last
    if (currentImage >= Myimages.length){
        currentImage = 0;
    }
}

function prevImage(){
    //decriment going down
    show.src = Myimages[currentImage];
    currentImage--
//not less the zero.. prevent being undifined
    if(currentImage < 0){
        currentImage = Myimages.length-1;
    }
}

