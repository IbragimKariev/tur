const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let menuOpen = false;
menuBtn.addEventListener('click', ()=> {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('active');
        menuOpen=true;
    }
    else {
        menuBtn.classList.remove('open');
        menu.classList.remove('active');
        menuOpen=false;
    }
})
const pp = document.querySelector('.pp_block');
const open_pp = document.querySelector('#open_pp');
const close_pp = document.querySelector('.bg_overlay');
const close_pp_btn = document.querySelector('.close_pp');

open_pp.addEventListener('click', ()=> {
    pp.classList.add('shown');
})
close_pp.addEventListener('click', ()=> {
    pp.classList.remove('shown');
})
close_pp_btn.addEventListener('click', ()=> {
    pp.classList.remove('shown');
})