var searchBottom = document.querySelector(".search-button");
var searchForm = document.querySelector(".form");
var searchBlock = document.querySelector(".search-form");

//===== Проверка Local Srorage=====

var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("arrival");} 
  catch (err) {
    isStorageSupport = false;
}


//===== Открытие и закрытие модального окна на главной странице=====

if (searchBottom && searchForm){
  // модальное окно закрыто по умолчанию
  searchForm.classList.add("form-close");
  searchBlock.classList.remove("search-form-show");
  searchBlock.classList.add("search-form-hidden");

  searchBottom.addEventListener("click", function (evt) {
    // при нажатии на кнопку отключаем  класс закрытого модального окна
    if(searchForm.classList.contains("form-close")) {
      searchForm.classList.remove("form-close");
      searchForm.classList.add("form-hidden");
    }
        // удалить анимацию ошибки
    if(searchForm.classList.contains("modal-error")) {
      searchForm.classList.remove("modal-error");
      formArrival.style.outline = "none";
      formDeparture.style.outline = "none";
      formAdults.style.outline = "none";
      searchForm.classList.add("form-show");
    }
    // переключаем классы с анимацией  выезда модального окна
    evt.preventDefault();
    searchForm.classList.toggle("form-hidden");
    searchForm.classList.toggle("form-show");
    searchBlock.classList.toggle("search-form-hidden");
    searchBlock.classList.toggle("search-form-show");
   });
}

//===== Закрытие всплывающего окна по Esc =====

document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (searchForm.classList.contains("form-show")) {
      searchForm.classList.remove("form-show");
      searchForm.classList.add("form-hidden");
      }
      if (searchForm.classList.contains("modal-error")) {
        searchForm.classList.remove("modal-error");
        searchForm.classList.add("form-hidden");
        formArrival.style.outline = "none";
        formDeparture.style.outline = "none";
        formAdults.style.outline = "none";
        }
      evt.preventDefault();
      searchBlock.classList.toggle("search-form-hidden");
      searchBlock.classList.toggle("search-form-show");
    }
});



//===== Проверка формы=====

var formArrival = searchForm.querySelector(".arrival-form");
var formDeparture = searchForm.querySelector(".departure-form");
var formAdults = searchForm.querySelector(".form-adults");
var formChildren = searchForm.querySelector(".form-children");

if (searchForm){
  // удалила атрибут проверки, т.к с ним моя форма не трясется
  formArrival.removeAttribute('required');
  formDeparture.removeAttribute('required');
  formAdults.removeAttribute('required');

  searchForm.addEventListener("submit", function (evt) {
  if (!formArrival.value || !formDeparture.value || !formAdults.value || formAdults.value<=0) {
    // если форма не заполнена- добавляем анимацию ошибки формы
    evt.preventDefault();
    searchForm.classList.remove("form-show");
    searchForm.classList.remove("modal-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("modal-error");


    // Подсветка input, если неправильно
    if (!formArrival.value){
      formArrival.style.outline = "1px solid #766357";
    }
    else {
      formArrival.style.outline = "none";
   
    }

    if (!formDeparture.value){
      formDeparture.style.outline = "1px solid #766357";
    }
    else {
      formDeparture.style.outline = "none";
    }

    if (!formAdults.value || formAdults.value<=0 ){
      formAdults.style.outline = "1px solid #766357";
    }
    else {
      formAdults.style.outline = "none";
    }
  }   
  else {
    if (isStorageSupport) {
      localStorage.setItem("arrival", formArrival.value);
      localStorage.setItem("departure", formDeparture.value);
      localStorage.setItem("adults", formAdults.value);
    }
  }
});
}




//====== Добавление карты ======

function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 9,
        center: {lat: 34.831793, lng: -111.762655},
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_TOP
        },
        streetViewControl: true,
        streetViewControlOptions: {
          position: google.maps.ControlPosition.RIGHT_TOP
        },
        mapTypeId: google.maps.MapTypeId.TERRAIN,
    };
    map = new google.maps.Map(element, options);

    marker = new google.maps.Marker({
    position: new google.maps.LatLng(34.869977, -111.760947),
    map: map,
    });
}

// ======счетчик + и - ====

var buttonMinusAdl = document.querySelector(".min-adults");
var buttonPlusAdl = document.querySelector(".plus-adults");
var buttonMinusChild = document.querySelector(".min-children");
var buttonPlusChild = document.querySelector(".plus-children");

buttonMinusAdl.addEventListener("click", function (evt) {
  if(formAdults.value>0) {
   formAdults.value--;
  }
  
});

buttonPlusAdl.addEventListener("click", function (evt) {
  if(formAdults.value>=0) {
   formAdults.value++;
  }
  
});

buttonMinusChild.addEventListener("click", function (evt) {
  if(formChildren.value>0) {
   formChildren.value--;
  }
  
});

buttonPlusChild.addEventListener("click", function (evt) {
  if(formChildren.value>=0) {
   formChildren.value++;
  }
  
});


