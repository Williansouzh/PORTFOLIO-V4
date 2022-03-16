const target = document.querySelectorAll('[data-animate]');
const animationClass = 'animate';
function animeScroll(){
    const pageTop = window.pageYOffset +(window.innerHeight * 3 / 4);
    target.forEach((e)=>{
        if((pageTop)>e.offsetTop){
            e.classList.add(animationClass);
        }
    })
};
animeScroll();
if(target.length){
    window.addEventListener('scroll', ()=>{
        animeScroll()
    })
}