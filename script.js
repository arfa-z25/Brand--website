gsap.to(".image-container", {
    ease: "power3.inOut",
    width: "100%",
    duration: 3,
    stagger: 2.5,
    repeat: -1, 
    yoyo : true 
});

gsap.to(".text h1", {
    ease: "power3.inOut",
     top : 0 ,
    duration: 3,
    stagger: 2.5,
    repeat: -1, 
    yoyo : true 
});

gsap.to(".text h1", {
    ease: "power3.inOut",
     top : "-180%" ,
    duration: 3,
    stagger: 2.5,
    repeat: -1, 
    yoyo : true 
});

gsap.to(".thread", {
    ease: "power3.inOut",
    backgroundColor: "black",
    duration: 3,
    stagger: 2.5,
    repeat: -1, 
    yoyo : true 
});





const personIcon = document.getElementById("profile");
const section = document.getElementById("person-details");

const icon  = document.getElementById("search");
const box = document.getElementById("search-container");

const menueIcon = document.getElementById("menue");
const menueBox = document.getElementById("menueBox");

const crossIcon = document.getElementById("crossIcon");

personIcon.addEventListener('click', () => {
    section.style.visibility = section.style.visibility === 'hidden' ? 'visible' : 'hidden';
    box.style.visibility= 'hidden';
    menueBox.style.visibility='hidden';
  });


  
   icon.addEventListener('click', () => {
      box.style.visibility = box.style.visibility === 'hidden' ? 'visible' : 'hidden';
      section.style.visibility = 'hidden';
      menueBox.style.visibility='hidden';
    });


    

    menueIcon.addEventListener('click' , ()=>
    {
      menueBox.style.visibility = menueBox.style.visibility === 'hidden' ? 'visible' : 'hidden';
      section.style.visibility = 'hidden';
      box.style.visibility= 'hidden';
    });

    crossIcon.addEventListener('click' , ()=>
    {
      menueBox.style.visibility = 'hidden';
    });
   
   
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two" ,
        start: "0% 50%", // Corrected typo
        end: "100% 50%",
        scrub: 2,
        repeat : -1
        
      }
    });
    
    tl.to(".text-area-hover", {
      width: "100%",
      duration: 2 // Adjust as needed (seconds)
    });

    const forwardIcon = document.getElementById('forward');
    const backwardIcon = document.getElementById('backward');
    forwardIcon.addEventListener('click' , ()=>
    {
      const review = document.getElementById("reviewParagraph");
      const reviewText = review.innerText;
      const circle1 = document.getElementById("shape1");
      const circle2 = document.getElementById("shape2");
      const circle3 = document.getElementById("shape3");

      if(reviewText==="Your dress are so comfy! like i have seven of them in my wardrobe right now!")
      {
        review.innerText = "The quality of clothes is so good.";
        circle2.style.backgroundColor = "black";
        circle1.style.backgroundColor="";
        circle3.style.backgroundColor="";
      }
      else if(reviewText==="The quality of clothes is so good.")
      {
          review.innerText = "Thank you zenieth finally i found my perfect size.";
          circle3.style.backgroundColor = "black";
          circle2.style.backgroundColor = "";
          circle1.style.backgroundColor="";
      }
      else
      {
        review.innerText ="Your dress are so comfy! like i have seven of them in my wardrobe right now!";
        circle1.style.backgroundColor = "black";
        circle3.style.backgroundColor = "";
        circle2.style.backgroundColor = "";
    }
    }
    );

    backwardIcon.addEventListener('click' , ()=>
      {
        const review = document.getElementById("reviewParagraph");
        const reviewText = review.innerText;
        const circle1 = document.getElementById("shape1");
      const circle2 = document.getElementById("shape2");
      const circle3 = document.getElementById("shape3");
        if(reviewText==="Your dress are so comfy! like i have seven of them in my wardrobe right now!")
        {
          review.innerText = "Thank you zenieth finally i found my perfect size.";
          circle3.style.backgroundColor = "black";
          circle2.style.backgroundColor = "";
          circle1.style.backgroundColor="";

        }
        else if(reviewText==="Thank you zenieth finally i found my perfect size.")
        {
            review.innerText = "The quality of clothes is so good.";
            circle2.style.backgroundColor = "black";
            circle1.style.backgroundColor="";
            circle3.style.backgroundColor="";
        }
        else
        {
          review.innerText ="Your dress are so comfy! like i have seven of them in my wardrobe right now!";
          circle1.style.backgroundColor = "black";
          circle3.style.backgroundColor = "";
          circle2.style.backgroundColor = "";
        }
      });


  

    
    

    
