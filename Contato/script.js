function abrirmeno() {
    let DivMenu = document.getElementById ('barra-menu');
    if (DivMenu.style.width == '' || DivMenu.style.width == '0px') {
        document.getElementById('barra-menu').style.width="180px";
    } else {
        document.getElementById('barra-menu').style.width="0px"
    }
} 
