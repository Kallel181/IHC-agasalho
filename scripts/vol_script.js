//blur initial date input
const dateInput = document.querySelector('input[type="date"]');
dateInput.blur();


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