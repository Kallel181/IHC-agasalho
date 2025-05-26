//GET Document objects (allways present)
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

//Index page btns
if (document.title =="Quem Somos"){
document.getElementById("btn_quero_doar").onclick = function () {
  location.href = "doar.html";
};}

if (document.title == "Quem Somos"){
document.getElementById("btn_quero_ser_voluntario").onclick = function () {
  location.href = "voluntario.html";
};}


//Onde Doar btns
if (document.title == "Quero Doar"){
document.getElementById("btn_ver_pontos_doacao").onclick = function () {
  location.href = "https://www.instagram.com/p/DBKgRbhyb5R/?img_index=1";
};}



//Reactive offsetHeight for fixed menu change
//main_content needs a extra margin top depending on the height of the fixed element
main_content.style.marginTop = fixed_bar.offsetHeight

addEventListener("resize", (event) => { 
  main_content.style.marginTop = fixed_bar.offsetHeight
});




//Footer Social Links 
document.getElementById("btn_insta").onclick = function () {
  window.open("https://www.instagram.com/instagasalho/", '_blank').focus();
}
document.getElementById("btn_face").onclick = function () {
  window.open("https://www.facebook.com/campanhadoagasalhouspsc/?locale=pt_BR", '_blank').focus();
}



//Client side check 
if (document.title == "Quero ser Voluntário"){
  document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector('input[type="email"]');
  const phoneInput = document.querySelector('input[type="tel"]');
  const nameInput = document.querySelector('input[type="text"]');
  const dateInput = document.querySelector('input[type="date"]');
  
  const btnSend = document.getElementById("btn_send_form");
  const feedback = document.getElementById("feedback_form");

  //email regex
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  //phone regex
  function isValidPhone(phone) {
    const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    return regex.test(phone);
  }

  //Format phone to (00)00000-0000
  phoneInput.addEventListener("input", () => {
    let value = phoneInput.value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    let formatted = value;

    if (value.length >= 2) {
      formatted = `(${value.slice(0, 2)})`;
      if (value.length >= 7) {
        formatted += `${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        formatted += value.slice(2);
      }
    }

    phoneInput.value = formatted;
  });


  btnSend.addEventListener("click", (e) => {
    e.preventDefault(); //don't send form in case of a error
    feedback.textContent = "";

    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || dateInput.value.trim() === "" || phoneInput.value.trim() === ""){
      feedback.textContent = "Por favor preencha todo o formulário";
      return;
    }

    if (!isValidEmail(email)) {
      feedback.textContent = "Por favor, insira um e-mail válido.";
      return;
    }

    if (!isValidPhone(phone)) {
      feedback.textContent = "Por favor, insira um telefone válido no formato (00)00000-0000.";
      return;
    }

    feedback.textContent = "Formulário enviado com sucesso!";
  });
});
}