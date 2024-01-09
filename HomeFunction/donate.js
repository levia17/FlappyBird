// Button donate
const btn = document.querySelector('.btnDN');
// Show
var show = document.querySelector(".showDNHidden");


export function clickDN(){
    btn.addEventListener('click', ()=>{
        show.classList.toggle('showDNShow');
        console.log('click')
    })
}