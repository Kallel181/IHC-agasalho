//GET Document objects
var fixed_bar = document.getElementById("fixed_bar");
var main_content = document.getElementById("main_content");

var indicator_quem_somos = document.getElementById("menu_quem_somos_indicator");
var indicator_quero_doar = document.getElementById("menu_doar_indicator");
var indicator_quero_ser_voluntario = document.getElementById("menu_voluntario_indicator");



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

if (document.title == "Quero doar"){
  indicator_quem_somos.style.visibility = "hidden"
  indicator_quero_doar.style.visibility = "visible"
  indicator_quero_ser_voluntario.style.visibility = "hidden"
}

if (document.title == "Quero Ser Voluntário"){
  indicator_quem_somos.style.visibility = "hidden"
  indicator_quero_doar.style.visibility = "hidden"
  indicator_quero_ser_voluntario.style.visibility = "visible"
}


//Reactive imageboard



//Reactive offsetHeight for fixed menu change
//main_content needs a extra margin top depending on the height of the fixed element
main_content.style.marginTop = fixed_bar.offsetHeight

addEventListener("resize", (event) => { 
  main_content.style.marginTop = fixed_bar.offsetHeight
});


