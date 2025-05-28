const btn_to_menu = document.getElementById("btn_to_menu");
const btn_to_content = document.getElementById("btn_to_content");
const btn_to_footer = document.getElementById("btn_to_footer");
const btn_to_top = document.getElementById("btn_to_top");



const btn_contrast = document.getElementById("btn_contrast");

const root = document.querySelector(':root');



//Contrast Change
var is_high = false

btn_contrast.onclick = function () {
  if(!is_high){
    set_high_contrast_colors()
  }else{
    set_default_colors()
  }
  is_high = !is_high
}

function set_high_contrast_colors(){
  root.style.setProperty('--Darkblue', '#000000');
  root.style.setProperty('--DarkerBlue', '#000000');
  root.style.setProperty('--PaleOrange', '#ffffff');
  root.style.setProperty('--DarkerOrange', '#000000');
  root.style.setProperty('--BlueBorder', '#000000');
  root.style.setProperty('--Darkblue_light', '#2b2b2b');

  document.querySelectorAll('.text_input').forEach(el => {
    el.style.border = '5px solid #000';
  });

}

function set_default_colors(){
  root.style.setProperty('--Darkblue', '#003b5d');
  root.style.setProperty('--DarkerBlue', '#00263c');
  root.style.setProperty('--PaleOrange', '#ea9a68');
  root.style.setProperty('--DarkerOrange', '#eb7228');
  root.style.setProperty('--BlueBorder', '#0068a5');
  root.style.setProperty('--Darkblue_light', '#005586');

  document.querySelectorAll('.text_input').forEach(el => {
    el.style.border = 'none';
  });
}



//jump Section
btn_to_menu.onclick = function(){
  document.getElementById("btn_quem_somos_menu").focus();
}

btn_to_footer.onclick = function () {
  document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
}

btn_to_top.onclick = function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}