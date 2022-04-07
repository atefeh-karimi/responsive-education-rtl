/* change navbar background */

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})

/* show/hide faq answer */

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fas fa-plus'){
            icon.className = 'fas fa-minus'
        } else {
            icon.className = 'fas fa-plus'
        }
     })
})




// show/hide nav menu
const menu = document.querySelector('.nav__menu');
const openBtn = document.querySelector('.open-menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');

openBtn.addEventListener('click', ()=>{
    menu.style.display ='flex';
    closeBtn.style.display = 'inline-block';
    openBtn.style.display = 'none';
})

closeBtn.addEventListener('click', ()=>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
})