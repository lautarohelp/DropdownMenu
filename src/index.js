const menuburguer = document.querySelector('.menuBurger');
const features = document.querySelector('.Features');
const features2 = document.querySelector('.Features2');
const MenuPrincipal = document.querySelector('.menuPrincipal')
const featuresList = document.querySelector('.FeaturesList');
const company = document.querySelector('.Company')
const companyList = document.querySelector('.CompanyList')
const headerM = document.querySelector('.headerM');
const closedMenuIcon = document.querySelector('.closedMenu');
const openMenuIcon = document.querySelector('.burger');
const openFeacIcon = document.querySelector('.icon-down');
const arrowDow = document.querySelector('.arrow-dow');
const arrowDow2 = document.querySelector('.arrow-dow2');
const arrowUp = document.querySelector('.arrow-up');
const arrowUp2 = document.querySelector('.arrow-up2');
const clickClose = document.querySelector('.clickClose');

window.addEventListener('resize',closeResiZe)
closeResiZe();


openMenuIcon.addEventListener('click',openMenu);
closedMenuIcon.addEventListener('click',closeMenu);
features.addEventListener('click',openAndClose);
company.addEventListener('click',openAndCloseDem);
clickClose.addEventListener('click',closeMenu);

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
