const menuburguer = document.querySelector('.menuBurger');
const features = document.querySelector('.Features');
const features2 = document.querySelector('.Features2');
const MenuPrincipal = document.querySelector('.menuPrincipal')
const featuresList = document.querySelector('.FeaturesList');
const company = document.querySelector('.Company')
const companyList = document.querySelector('.CompanyList')
const headerM = document.querySelector('.headerM');
const closedMenuIcon = document.querySelector('.closedMenu');
const closedMenIcon = document.querySelector('.closedMen');
const openMenuIcon = document.querySelector('.burger');
const openFeacIcon = document.querySelector('.icon-down');
const arrowDow = document.querySelector('.arrow-dow');
const arrowDow2 = document.querySelector('.arrow-dow2');
const arrowUp = document.querySelector('.arrow-up');
const arrowUp2 = document.querySelector('.arrow-up2');
const clickClose = document.querySelector('.clickClose');
const clickRegistro = document.querySelector('.registro');
const registroGeneralPrincipal = document.querySelector('.registroGeneralPrincipal');
const button__login = document.querySelector('.button__login')
const pantalla = document.querySelector('.pantalla')
const pantalla2 = document.querySelector('.pantalla2')
const mantenimiento = document.querySelector('.mantenimiento')
const enter = document.querySelector('.enter');
const maik = document.querySelector('.maik');
const loging = document.querySelector('.loging');
const closeLogin = document.querySelector('.closeLogin')

window.addEventListener('resize',closeResiZe)
closeResiZe();

/* window.addEventListener('hash',verifyHash)   */

closeLogin.addEventListener('click',openLoging)
loging.addEventListener('click',openLoging)
maik.addEventListener('click',verifyHash);
button__login.addEventListener('click',verifyHash);
clickRegistro.addEventListener('click', openRegistro)
openMenuIcon.addEventListener('click',openMenu);
closedMenuIcon.addEventListener('click',closeMenu);
features.addEventListener('click',openAndClose);
company.addEventListener('click',openAndCloseDem);
clickClose.addEventListener('click',closeMenu);
closedMenIcon.addEventListener('click',openRegistro);


function openLoging() {
    if (enter.classList.contains('inactive')) {
        enter.classList.remove('inactive');
        closeResiZe();
        closeMenu();
    }else if (!enter.classList.contains('inactive')) {
        enter.classList.add('inactive');
        closeResiZe();
}
}

function openRegistro() {
    if (registroGeneralPrincipal.classList.contains('inactive')) {
        registroGeneralPrincipal.classList.remove('inactive');
        closeResiZe();
        closeMenu();
    }else if (!registroGeneralPrincipal.classList.contains('inactive')) {
        registroGeneralPrincipal.classList.add('inactive');
        closeResiZe();
    }
}

function closeResiZe() {
    if (window.innerWidth >= 650) {
        closeMenu();
        menuburguer.classList.remove('menuBurger');
        menuburguer.classList.remove("inactive");
        MenuPrincipal.className = 'headerM menuPrincipal'
        
    }else if (window.innerWidth <= 649){
        menuburguer.classList.add("inactive"); 
        MenuPrincipal.className = 'menuPrincipal'
        menuburguer.classList.add('menuBurger');
    }
}

function openMenu() {
    menuburguer.classList.remove('inactive')
    clickClose.classList.remove('inactive')
    if (!openMenu) {
        closeMenu();
    }
}

function closeMenu() {
    menuburguer.classList.add('inactive')
    clickClose.classList.add('inactive')
    if (!closeMenu) {
        openMenu();
    }else if (closeMenu) {
        featuresList.classList.add("inactive")
        arrowDow.classList.remove('inactive')
        arrowUp.classList.add('inactive')
        companyList.classList.add("inactive")
        arrowUp2.classList.add('inactive')
        arrowDow2.classList.remove('inactive')
    }
}

function openAndClose() {
    const feat2 = featuresList.classList.contains("inactive")

    if(feat2){
        featuresList.classList.remove("inactive")
        arrowUp.classList.remove('inactive')
        arrowDow.classList = 'inactive'
    }else if (!feat2){
        arrowUp.classList.add('inactive')
        arrowDow.classList.remove('inactive')
        featuresList.classList.add("inactive")
    }
}

function openAndCloseDem() {
    const company2 = companyList.classList.contains("inactive")

    if(company2){
        companyList.classList.remove("inactive")
        arrowUp2.classList.remove('inactive')
        arrowDow2.classList = 'inactive'
    }else if (!company2){
        arrowUp2.classList.add('inactive')
        arrowDow2.classList.remove('inactive')
        companyList.classList.add("inactive")
    }
}

function verifyHash() {
    if (mantenimiento.classList.contains('inactive')) {
        mantenimiento.classList.remove('inactive')
        pantalla.classList.add('inactive')
        pantalla2.classList.add('inactive')
        openRegistro();
    } else if (mantenimiento.classList.contains('inactive')) {
        mantenimiento.classList.add('inactive')
        pantalla.classList.remove('inactive')
        pantalla2.classList.remove('inactive')
    }
}