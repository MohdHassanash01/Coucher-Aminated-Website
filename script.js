//    Animation 


let tl = gsap.timeline()
tl .from("#nav h1,#nav2 h3 , h4",{
    y:-80,
    opacity:0,
    duration:0.8,
    stagger:0.3,
})

tl.from("#left h1",{
    x:-100,
    opacity:0,
    stagger:1,
    duration:0.5

})

tl.from("#right img",{
    opacity:0,
    duration:0.5,
 scale:2
})

tl.from(".down",{
    y:30,
    duration:0.5,
    repeat:-1,
    yoyo:true,
    opacity:0
})


// Scrolltrigger next page

gsap .from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        // markers:"transparent"

    }
})



let signup = document.querySelector("#nav h4")
let nav2 = document.querySelectorAll("#nav h3")
let logo = document.querySelector("#nav h1")
let container = document.querySelectorAll("#container h1")

let card = document.querySelectorAll("#page2 .box")
console.log(card);

let image = document.querySelector("#right img")
console.log(signup);
console.log(nav2);
console.log(container);

signup.addEventListener("mouseenter",function(){
    signup.style.border = "2px solid white" 
    signup.style.cursor = 'pointer';
    // signup.style.color = 'black'
})

signup.addEventListener("mouseleave",function(){
    signup.style.border = "2px solid transparent" 
    signup.style.backgroundColor = 'black'

})

let count = 0
signup.addEventListener("dblclick",function(){
   if (count == 0) {
    signup.innerHTML = 'LOG OUT'
    alert("log in")
    count ++
   }else{
    signup.innerHTML = 'SIGN UP'
count --
   }
})

logo.addEventListener("mouseenter",function(){
    logo.style.cursor = 'pointer';
    logo.style.border = '2px solid white'

})

logo.addEventListener("mouseleave",function(){
    logo.style.cursor = 'pointer';
    logo.style.border = '2px solid transparent'
    
})

nav2.forEach(function(item){
    item.addEventListener("mouseenter",function(){
        item.style.cursor = 'pointer';
        item.style.textDecoration = 'underline';
    
    })
    
    item.addEventListener("mouseleave",function(){
        item.style.cursor = 'pointer';
        item.style.textDecoration = 'none';
    })
})


container.forEach(function(value){

    value.addEventListener("mouseenter",function(){
     value.style.WebkitTextStroke = '2px white';
     value.style.color = 'black'
     value.style.cursor = 'pointer';
    })


    value.addEventListener("mouseleave",function(){
        value.style.WebkitTextStroke = '2px transparent';
        value.style.color = 'white'
        value.style.cursor = 'pointer';
       })

})



image.addEventListener("mouseenter",function(){
    image.style.boxShadow = 'yellow 5px 5px, yellow 10px 10px, yellow 15px 15px, yellow 20px 20px, yellow 25px 25px';;
})

image.addEventListener("mouseleave",function(){
    image.style.boxShadow = "none";
})


// page 2

card.forEach(function(elem){

    elem.addEventListener('mouseenter',function(){
elem.style.backgroundColor = 'white'
elem.style.border = '2px solid black'

elem.firstElementChild.style.color = 'black'
elem.lastElementChild.style.color = 'black'
elem.firstElementChild.style.textDecoration = 'underline'
elem.style.cursor = 'pointer'
elem.style.scale = 1.1

elem.style.boxShadow =' yellow 0px 13px 27px -5px, white 0px 8px 16px -8px';
    })

    elem.addEventListener('mouseleave',function(){
        elem.style.backgroundColor = 'black'
        elem.lastElementChild.style.color = 'white'
        elem.lastElementChild.style.color = 'white'
        elem.style.border = '2px solid white'
        elem.firstElementChild.style.color = 'white'

        elem.firstElementChild.style.textDecoration = 'none'
        elem.style.cursor = 'pointer'
        elem.style.boxShadow = 'none';

       elem.style.scale = 1

            })


    })




// page 3/

let head = document.querySelector(".head")

let h1 = document.querySelector(".head h1")
head.style.borderTop = '3px solid white';


head.addEventListener("mouseenter",function(){
    head.style.backgroundColor = 'black'
    h1.style.color = 'black'
    h1.style.WebkitTextStroke = '2px solid white'
})


head.addEventListener("mouseleave",function(){
    head.style.backgroundColor = 'white'
    h1.style.color = 'black'
    h1.style.WebkitTextStroke = '2px white';

})

h1.addEventListener("mouseenter",function(){
    h1.style.color = 'white'
    h1.style.cursor = 'pointer'
})

h1.addEventListener("mouseleave",function(){
    h1.style.color = 'transparent'
    h1.style.cursor = 'none'

})

// page 4 

let page3Card = document.querySelector("#page3 .card")
console.log(page3Card);



const image1 = document.querySelector(" .card #image")
console.log(image1);

let head2 = document.querySelector("#page3 .card h1")

let para = document.querySelector("#page3 .card p")

let button = document.querySelector("#page3 .card button")

// div.appendChild(page3Card)


page3Card.addEventListener("mouseenter",function(){
    image1.style.opacity = 0
    head2.style.display = 'block'
    para.style.display = 'block'
    button.style.display = 'block'
    page3Card.style.boxShadow = 'yellow 0px 14px 28px, yellow 0px 10px 10px';

})

page3Card.addEventListener("mouseleave",function(){
    image1.style.opacity = 1
    head2.style.display = 'none'
    para.style.display = 'none'
    button.style.display = 'none'

    page3Card.style.boxShadow = 'none';


})

button.addEventListener("mouseenter",function(){
    button.style.backgroundColor = 'black'
    button.style.color = 'white'
})

button.addEventListener("mouseleave",function(){
    button.style.backgroundColor = 'white'
    button.style.color = 'black'
})


