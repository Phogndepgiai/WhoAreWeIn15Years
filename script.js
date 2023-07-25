//Hamburger navigation bar -----------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
let hamburgerCheckBox = document.getElementById("hamburgerCheckBox")
let hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0]
let navbarlinks = document.querySelectorAll(".navbar-links")
let navbar = document.getElementById("navbar")
hamburgerCheckBox.setAttribute("checked","false")

navbarlinks.forEach((li) => {
    li.addEventListener("click",()=>{
        console.log("clicked")
        hamburgerMenu.setAttribute("checked","false")
        hamburgerCheckBox.checked = "false"
    })
});

hamburgerMenu.addEventListener("click",()=>{
    if (!hamburgerCheckBox.checked){
        hamburgerMenu.setAttribute("checked","true")

    }else{
        hamburgerMenu.setAttribute("checked","false")

    }
})

window.matchMedia("(max-width:1000px)").addEventListener("change",(x)=>{
    if (!x.matches) {
        hamburgerMenu.setAttribute("checked","false")
        hamburgerCheckBox.checked = "false"

    } 
  })



window.onscroll =  () => {  
    if (document.documentElement.scrollTop >= 20){
        navbar.classList.add("sticky")}
        else{
            navbar.classList.remove("sticky")
        }
    

} 

//popUpAnimation --------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
const observer = new IntersectionObserver((entires) =>{
    entires.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))
////////////////////////

const aboutUsObserverRight = new IntersectionObserver((entires) =>{
    entires.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("aboutPopUpShowRight");
        }else{
            entry.target.classList.remove("aboutPopUpShowRight");
        }
    })
})

const aboutHiddenElementsRight = document.querySelectorAll(".aboutPopUpRight")
aboutHiddenElementsRight.forEach((el) => aboutUsObserverRight.observe(el))
////////////////////////

const aboutUsObserverLeft = new IntersectionObserver((entires) =>{
    entires.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("aboutPopUpShowLeft");
        }else{
            entry.target.classList.remove("aboutPopUpShowLeft");
        }
    })
})

const aboutHiddenElementsLeft = document.querySelectorAll(".aboutPopUpLeft")
aboutHiddenElementsLeft.forEach((el) => aboutUsObserverLeft.observe(el))

//About us image slider --------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
let imgList = document.getElementById("img-list")
let caroBtns = document.getElementsByClassName("caro-btn")
let status = 0
let positionUit = -100



function slideImg(x){
    let i
    if (x == "right" || x == "left"){
        for (i=0;i<caroBtns.length;i++){
            if (caroBtns[i].style.background == "white"){
                if (x=="right" &&  i+1<caroBtns.length){
                    x = i +1
                    break
                }else if (x=="left" && i-1>-1){
                    x = i -1
                    break
                }else if (x=="right" &&  i+1>=caroBtns.length){
                    x = 0
                    break

                }else if (x=="left" &&  i-1<=-1){
                    x = caroBtns.length-1
                    break
                }
            }
        }
    }
    for (i=0;i<caroBtns.length;i++){
        caroBtns[i].style.background = "black"
    }
    caroBtns[x].style.background = "white"
    position = x * positionUit
    imgList.style.left = position + "%"

}

//Paralax effects--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
let paralax1 = document.getElementById("paralax1")
let paralax2 = document.getElementById("paralax2")
let paralax3 = document.getElementById("paralax3")
let paralax4 = document.getElementById("paralax4")
let paralax5 = document.getElementById("paralax5")

window.addEventListener("scroll",()=>{
    let value = window.scrollY
    paralax1.style.top = value *-0.07+"px"
    paralax2.style.top = value *0.5+"px"
    paralax3.style.top = value *+0.08+"px"
    paralax4.style.top = value *+0.07+"px"
    paralax5.style.top = value *-0.05+"px"


    paralax3.style.left = value *+0.07+"px"
    paralax4.style.right = value *+0.06+"px"
})