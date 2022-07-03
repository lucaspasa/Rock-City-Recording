// assign variables  
const hamburger = document.getElementById("hamburger-button");
let swatch = false;

// event listener 
hamburger.addEventListener("click", function(e){
    console.log("test");
    
    // on off switch for hamburger menu dropdown
    if(swatch == false){
        // flip switch
        swatch = true; 

        // make menu appear
        menu.style.visibility = "visible";
        // menu.style.transition = ".3s ease";
        // change hamburger color 
        
        hamburger.style.backgroundColor = "#DAD674"
        hamburger.style.transition = ".3s"

        //animate hamburger
        hamLine1.style.transition = ".3s ease"
         hamLine2.style.transition = ".1s ease"
         hamLine3.style.transition = ".3s ease"
        hamLine2.style.visibility = "hidden";
        hamLine1.style.transform = "rotate(45deg) translate(5px, 5px)";
        hamLine3.style.transform = "rotate(-45deg) translate(6px, -6px)";
        // blur background
      
 
    } else {
         // hide menu               
         menu.style.visibility = "hidden";

        //recolor hamburger
        hamburger.style.backgroundColor = "#19adb2";
         //animate hamburger
         hamLine2.style.visibility = "visible";
         hamLine1.style.transform = "translate(0px, 0px) rotate(0deg) ";
         hamLine3.style.transform = "translate(0px, 0px) rotate(0deg) ";
         
        
        // flip switch
        swatch = false;
    }
    
})