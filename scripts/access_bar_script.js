const contrast_btn = document.getElementById("btn_contrast");
const r = document.querySelector(':root');



//Contrast Change
var is_high = false

contrast_btn.onclick = function () {
  if(!is_high){
    set_high_contrast_colors()
  }else{
    set_default_colors()
  }
  is_high = !is_high
}

function set_high_contrast_colors(){
  r.style.setProperty('--Darkblue', '#000000');
  r.style.setProperty('--DarkerBlue', '#000000');
  r.style.setProperty('--PaleOrange', '#ffffff');
  r.style.setProperty('--DarkerOrange', '#000000');
  r.style.setProperty('--BlueBorder', '#000000');
  r.style.setProperty('--Darkblue_light', '#2b2b2b');

  document.querySelectorAll('.text_input').forEach(el => {
    el.style.border = '5px solid #000';
  });

}

function set_default_colors(){
  r.style.setProperty('--Darkblue', '#003b5d');
  r.style.setProperty('--DarkerBlue', '#00263c');
  r.style.setProperty('--PaleOrange', '#ea9a68');
  r.style.setProperty('--DarkerOrange', '#eb7228');
  r.style.setProperty('--BlueBorder', '#0068a5');
  r.style.setProperty('--Darkblue_light', '#005586');

  document.querySelectorAll('.text_input').forEach(el => {
    el.style.border = 'none';
  });
}



