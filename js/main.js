const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.navLinks')
const bars = document.querySelector('.fa-bars')
const links = document.querySelectorAll('.navLinks li a')



burger.addEventListener('click',()=>{
    navLinks.classList.toggle('show') 
    bars.classList.toggle('fa-times') 
    
    console.log(links)
})

links.forEach(element => {
    element.addEventListener('click',()=>{
        navLinks.classList.remove('show')
        bars.classList.remove('fa-times')
    })
});