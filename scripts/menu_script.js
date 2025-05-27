//GET Document objects (allways present)
var fixed_bar = document.getElementById("fixed_bar");
var main_content = document.getElementById("main_content");

var indicator_quem_somos = document.getElementById("menu_quem_somos_indicator");
var indicator_quero_doar = document.getElementById("menu_doar_indicator");
var indicator_quero_ser_voluntario = document.getElementById("menu_voluntario_indicator");

var menu_logo = document.getElementById("home_logo");

//Indicator tab
//Show the correct tab for the current page
indicator_quem_somos.style.visibility = "hidden"
indicator_quero_doar.style.visibility = "hidden"
indicator_quero_ser_voluntario.style.visibility = "hidden"

if (document.title == "Quem Somos"){
  indicator_quem_somos.style.visibility = "visible"
  indicator_quero_doar.style.visibility = "hidden"
  indicator_quero_ser_voluntario.style.visibility = "hidden"
}

if (document.title == "Quero Doar"){
  indicator_quem_somos.style.visibility = "hidden"
  indicator_quero_doar.style.visibility = "visible"
  indicator_quero_ser_voluntario.style.visibility = "hidden"
}

if (document.title == "Quero ser Voluntário"){
  indicator_quem_somos.style.visibility = "hidden"
  indicator_quero_doar.style.visibility = "hidden"
  indicator_quero_ser_voluntario.style.visibility = "visible"
}

//Menu buttons redirect
if (document.title != "Quem Somos"){
document.getElementById("btn_quem_somos_menu").onclick = function () {
  location.href = "index.html";
};
}

if (document.title != "Quero Doar"){
document.getElementById("btn_quero_doar_menu").onclick = function () {
  location.href = "doar.html";
};
}

if (document.title != "Quero ser Voluntário"){
document.getElementById("quero_ser_voluntario").onclick = function () {
  location.href = "voluntario.html";
};
}


//Reactive offsetHeight for fixed menu change
//main_content needs a extra margin top depending on the height of the fixed element
main_content.style.marginTop = fixed_bar.offsetHeight

addEventListener("resize", (event) => { 
  main_content.style.marginTop = fixed_bar.offsetHeight
});


//Home btn logic -> logo redirect to index.html
menu_logo.addEventListener('click', (event) => { 
  if (document.title != "Quem Somos"){
    location.href = "index.html";
  }
});


const scrollBtn = document.getElementById('scrollTopBtn');
//Only show scrolltopbtn if user scrolled the page
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
//go to top behavior
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});