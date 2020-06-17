var searchBottom = document.querySelector(".search-button");
var searchForm = document.querySelector(".form");
var searchBlock = document.querySelector(".search-form");

var formArrival = searchForm.querySelector("[name=arrival]");
var formDeparture = searchForm.querySelector("[name=departure]");
var formAdults = searchForm.querySelector("[name=adults]");
var formChildren = searchForm.querySelector("[name=children]");

// Проверка Local Srorage

var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("arrival");} 
  catch (err) {
    isStorageSupport = false;
}


// Открытие и закрытие вплывающиего окна на главной странице

searchBottom.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("form-close");
  searchForm.classList.toggle("form-show");
  searchBlock.classList.toggle("search-form-hidden");
  searchBlock.classList.toggle("search-form-show");
});

// Закрытие всплывающего окна по Esc 

document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (searchForm.classList.contains("form-show")) {
      searchForm.classList.remove("form-show");
      searchForm.classList.add("form-close");
      searchBlock.classList.toggle("search-form-hidden");
      searchBlock.classList.toggle("search-form-show");
      }
    }
});



// Проверка формы

searchForm.addEventListener("submit", function (evt) {
  if (!formArrival.value || !formDeparture.value || !formAdults.value) {
    evt.preventDefault();
    formArrival.classList.add('modal-error');
    formDeparture.classList.add('modal-error');
    formAdults.classList.add('modal-error')

 }
   else { 
    if (isStorageSupport){
      localStorage.setItem("arrival]", formArrival.value);
      localStorage.setItem("departure]", formDeparture.value);
      localStorage.setItem("adults]", formAdults.value);
    }
 }
});


// Добавление карты

function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 9,
        center: {lat: 34.831793, lng: -111.762655},
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP
        },
        streetViewControl: true,
        streetViewControlOptions: {
          position: google.maps.ControlPosition.RIGHT_TOP
        },
        mapTypeId: google.maps.MapTypeId.HYBRID,
    };
    map = new google.maps.Map(element, options);

    marker = new google.maps.Marker({
    position: new google.maps.LatLng(34.869977, -111.760947),
    map: map,
    });
}
