var searchBottom = document.querySelector(".search-button");
var searchForm = document.querySelector(".form");
var searchBlock = document.querySelector(".search-form");

var formArrival = searchForm.querySelector("[name=arrival]");
var formDeparture = searchForm.querySelector("[name=departure]");
var formAdults = searchForm.querySelector("[name=adults]");
var formChildren = searchForm.querySelector("[name=children]");


// Проверка локального хранилища в браузере

var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("arrival");
} catch (err) {
  isStorageSupport = false;
}



// Открытие и закрытие вплывающиего окна на главной странице    При загрузке и обновлении страницы, сразу присваивается класс form-close:(((!!!!  


if (searchBottom) {
    if (searchForm) {
      searchForm.classList.add("form-close");
    };
  
    searchBottom.addEventListener("click", function (evt) {
      evt.preventDefault();
      searchForm.classList.toggle("form-close");
      searchForm.classList.toggle("form-show");

    });
};

// if (searchForm.classList.contains("form-close")); {
//      searchBlock.classList.add("search-form-hidden");
//        if (searchBottom.addEventListener("click", function (evt){
//         evt.preventDefault();
//         searchBlock.classList.remove("search-form-hidden");
//         searchForm.classList.toggle("form-show");}

//        }   



// Закрытие всплывающего окна по Esc   срабатывает на все клавиши как так??

// window.addEventListener("keydown", function (evt) {
//     if (evt.keyCode === 27)
//     evt.preventDefault(); {
//       if (searchForm.classList.contains("form-show")) {
//         searchForm.classList.remove("form-show");
//         //  searchForm.classList.add("form-close");
//       }


//     }
// });


// Проверка формы

searchForm.addEventListener("submit", function (evt) {
  if (!formArrival.value || !formDeparture.value || !formAdults.value) {
     evt.preventDefault();


 }
   else {
    localStorage.setItem("[name=arrival]", formAdults.value);
    localStorage.setItem("[name=departure]", formAdults.value);
     localStorage.setItem("[name=adults]", formAdults.value);
     localStorage.setItem("[name=children]", formAdults.value);
     window.location.href='hotels.html';
 }
});



function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 9,
        center: {lat: 34.831793, lng: -111.762655},
        mapTypeId: google.maps.MapTypeId.HYBRID,
    };
    map = new google.maps.Map(element, options);

    
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(34.869977, -111.760947),
        map: map
        });
}
