const header = document.querySelector('header');

window.addEventListener('scroll', ()=> {
    header.classList.toggle('sticky', this.window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon')
let navmenu = document.querySelector('.navmenu')

menu.addEventListener('click', ()=> {
    navmenu.classList.toggle('open')
})

menu.onclick = () => {
    menu.className('bx ')
}

let signUp = document.querySelector('.nav-btn')
let account = document.querySelector('.account')
let btn_icon = document.querySelector('.btn-icon')

const ifPresent = ()=> {

}

btn_icon.onmouseover = ()=> {
    account.classList.add('ac-open')       
}

btn_icon.onmouseleave = ()=> {
    account.classList.remove('ac-open')
}