var dot_item = document.getElementById("switching")
var item_item = dot_item.getElementsByTagName("li");
var slider_item = document.getElementById("genetic-slider");
var nav_mobile = document.getElementById("nav-mobile");
var nav_mobile_content = document.getElementById("nav-mobile-inner__content");
var close_mobile = document.getElementById("close-mobile");
var nav_button_block = document.getElementById("nav-button-block");
var city_mobile_cover = document.getElementById("city-mobile-cover");
var back_city = document.getElementById("back_city");
var close_city = document.getElementById("close_city");
var city_mobile_button = document.getElementById("city-mobile-button");

item_itemArray = Array.from(item_item);
item_itemArray.forEach((element, index) => {
    element.addEventListener('click', () => {
        // alert('Item ' + index + ' clicked');
        var left_value = index * 454;
        slider_item.style.left = "-" + left_value + 'px';
    })
});
  
nav_button_block.addEventListener('click', () => {
    nav_mobile_content.classList.add('nav-mobile-inner__content-active')
    nav_mobile.classList.add('nav-mobile__active')
})

close_mobile.addEventListener('click', () => {
    nav_mobile_content.classList.remove('nav-mobile-inner__content-active')
    nav_mobile.classList.remove('nav-mobile__active')
})
    

city_mobile_button.addEventListener('click', () => {
    city_mobile_cover.classList.add('city-mobile-cover_active')
})

back_city.addEventListener('click', () => {
    city_mobile_cover.classList.remove('city-mobile-cover_active')
})

close_city.addEventListener('click', () => {
    city_mobile_cover.classList.remove('city-mobile-cover_active')
    nav_mobile_content.classList.remove('nav-mobile-inner__content-active')
    nav_mobile.classList.remove('nav-mobile__active')
})