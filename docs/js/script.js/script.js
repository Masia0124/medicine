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

const slider = document.getElementById("revievs_slider");
const nextBtn = document.getElementById("next01");
const prevBtn = document.getElementById("prev01");

const cardWidth = document.querySelector(".reviews_tekst").offsetWidth;

var review_index = 0;
var offset = 0;

var reviews_tekst = document.getElementsByClassName('reviews_tekst');
var reviev_slider_ul = document.getElementsByClassName('reviev_slider_ulactive');

item_itemArray = Array.from(item_item);
item_itemArray.forEach((element, index) => {
    element.addEventListener('click', () => {
        var left_value = index * 454;
        slider_item.style.left = "-" + left_value + 'px';
    })
});

item_itemArray.forEach(element => {
    element.addEventListener('click', () => {
        item_itemArray.forEach(element => element.classList.remove('switching-active'));

        element.classList.add('switching-active');
    })
} )
  
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

nextBtn.addEventListener("click", () => {
    reviews_tekst[review_index * -1].classList.remove('revievs_slider-active')
    reviev_slider_ul[review_index * -1].classList.remove('revievs_slider-ul_active')
    review_index += 1;

    if (review_index > 0) {
        review_index = '-' + reviews_tekst.length
        review_index++
    }

    offset = cardWidth * review_index;
    console.log('Review Index (Індекс активної карточки): ' + review_index);
    console.log('offset (Зміщення, яке ми вираховуємо як індекс помножити на ширину одного відгуку): ' + offset);
    slider.style.left = offset + 'px';
    reviews_tekst[review_index * -1].classList.add('revievs_slider-active')
    console.log(reviews_tekst.length)
    reviev_slider_ul[review_index * -1].classList.add('revievs_slider-ul_active')
});

prevBtn.addEventListener("click", () => {
    reviews_tekst[review_index * -1].classList.remove('revievs_slider-active')
     reviev_slider_ul[review_index * -1].classList.remove('revievs_slider-ul_active')
    review_index -= 1;
    console.log(review_index)
    var reviews_tekst_length = reviews_tekst.length
    reviews_tekst_length--;
    //review_index_log = 
    if (review_index*-1 > reviews_tekst_length) {
        
        review_index = 0;
    }
    offset = cardWidth * review_index;
    console.log('Review Index (Індекс активної карточки): ' + review_index);
    console.log('offset (Зміщення, яке ми вираховуємо як індекс помножити на ширину одного відгуку): ' + offset);
    slider.style.left = offset + 'px';
    reviews_tekst[review_index * -1].classList.add('revievs_slider-active')
    reviev_slider_ul[review_index * -1].classList.add('revievs_slider-ul_active')
});

