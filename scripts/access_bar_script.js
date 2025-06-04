const btn_to_menu = document.getElementById("btn_to_menu");
const btn_to_content = document.getElementById("btn_to_content");
const btn_to_footer = document.getElementById("btn_to_footer");
const btn_to_top = document.getElementById("btn_to_top");

const btn_contrast = document.getElementById("btn_contrast");

const btn_increase_font = document.getElementById("btn_increase_font");
const btn_decrease_font = document.getElementById("btn_decrease_font");

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



//jump Section - button onClick events
btn_to_menu.onclick = function(){
  document.getElementById("btn_quem_somos_menu").focus();
}

btn_to_footer.onclick = function () {
  document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
}

btn_to_top.onclick = function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

//jump Section - key press
document.addEventListener("keypress", function(event) {
  if (event.key == 1) { //btn_to_menu
    document.getElementById("btn_quem_somos_menu").focus();
  }
  if (event.key == 2) { //btn_to_footer
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  }
  if (event.key == 3) {//btn_to_top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});


//Font size change

//maximum ammount of clicks a user can do to change a font size
const number_of_changes = 6

//Minimum Font size
const absolute_min_small_font_size_px = 16
const absolute_min_normal_font_size_px = 24

//rate of change for font size
const rate_of_change_px = 2

//Maximum Font Size
const absolute_max_small_font_size_px = absolute_min_small_font_size_px + (number_of_changes*rate_of_change_px)
const absolute_max_normal_font_size_px = absolute_min_normal_font_size_px + (number_of_changes*rate_of_change_px)

//Current Font Size [TODO] - get default values from DOM
var current_small_font_size_px = 16
var current_normal_font_size_px = 24


//Click behaviour
btn_increase_font.onclick = function(){
  if(check_valid_font_size_increase()){
    increase_font_size();
  }  
}

//Click behaviour
btn_decrease_font.onclick = function(){
  if(check_valid_font_size_decrease()){
    decrease_font_size();
  }  
}

//check if a reduction on font size is valid
function check_valid_font_size_decrease(){
  if((current_small_font_size_px - rate_of_change_px) < absolute_min_small_font_size_px){
    return false
  } else{
    return true
  }
}

//Check if a increase on font size is valid
function check_valid_font_size_increase(){
  if((current_small_font_size_px + rate_of_change_px) > absolute_max_small_font_size_px){
    return false
  } else{
    return true
  }
}

//Increase font size on root and variable
function increase_font_size(){
  current_small_font_size_px += rate_of_change_px;
  current_normal_font_size_px += rate_of_change_px;

  root.style.setProperty('--FontsizeSmall', `${current_small_font_size_px}px`);
  
  root.style.setProperty('--MainContentFontSize', `${current_normal_font_size_px}px`);
  root.style.setProperty('--ImageBoardLowerTextSize', `${current_normal_font_size_px}px`);
  root.style.setProperty('--ImageBoardTitleFontSize', `${current_normal_font_size_px}px`);
}

//decrease font size on root and variable
function decrease_font_size(){
  current_small_font_size_px -= rate_of_change_px;
  current_normal_font_size_px -= rate_of_change_px;

  root.style.setProperty('--FontsizeSmall', `${current_small_font_size_px}px`);
  
  root.style.setProperty('--MainContentFontSize', `${current_normal_font_size_px}px`);
  root.style.setProperty('--ImageBoardLowerTextSize', `${current_normal_font_size_px}px`);
  root.style.setProperty('--ImageBoardTitleFontSize', `${current_normal_font_size_px}px`);
}
