document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

// When the user clicks on <div>, open the popup
function myFunction(ID) {
  var popup = document.getElementById(ID);
  popup.classList.toggle("show");
}

// map stuff

mapboxgl.accessToken = 'pk.eyJ1IjoibmVyZHltYXR0aGV3IiwiYSI6IjNQemZwLWcifQ.lMraL4-nPzeQCDGk1mCsAw';

var chapters = {
  'part-1': { // Intro – show all museums in NYC
      center: [-73.98, 40.73,],
      zoom: 12,
      bearing: 0,
      pitch: 0,
  },
  'part-2': { // Ellis Island
      center: [-74.041, 40.699],
      zoom: 16,
      bearing: 0,
      pitch: 0,
  },
  'part-3': { // Castle Clinton
      center: [-74.016, 40.703],
      zoom: 17.2,
      bearing: 43.19,
      pitch: 60,
  },
  'part-4': { // Irish Hunger Memorial
      center: [-74.016, 40.715],
      zoom: 17.86,
      bearing: 111.38,
      pitch: 50,
  },
  'part-5': { // Eldridge Street
      center: [-73.993, 40.715],
      zoom: 17.45,
      bearing: 0,
      pitch: 0,
  },
  'part-6': { // Tenement Museum
    center: [-73.990, 40.719],
    zoom: 18.8,
    bearing: 0,
    pitch: 0,
  },
  'part-7': { // End slide
    center: [-73.98, 40.73,],
    zoom: 11.6,
    bearing: 0,
    pitch: 0,
  }
};

var map;

window.onload = function() {
  map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/nerdymatthew/ck5tp3fgf0pp61iqfzshsk2uv',
      center: [-73.98, 40.73],
      zoom: 12,
      bearing: 0,
      pitch: 0,
  });
}

// On every scroll event, check which element is on screen
window.onscroll = function() {
  var chapterNames = Object.keys(chapters);
  console.log(chapterNames);
  for (var i = 0; i < chapterNames.length; i++) {
      var chapterName = chapterNames[i];
      if (isElementOnScreen(chapterName)) {
          setActiveChapter(chapterName);
          break;
      }
  }
};

var activeChapterName = 'part-1';
function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  map.flyTo(chapters[chapterName]);

  document.getElementById(chapterName).setAttribute('class', 'active');
  document.getElementById(activeChapterName).setAttribute('class', '');

  activeChapterName = chapterName;
}

function isElementOnScreen(id) {
  let leeway = window.innerHeight * .6;
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < (window.innerHeight + leeway) && bounds.bottom > 0 + leeway;
}

// REEE
function test(lat,lng) {

  let temp = {
    center: [lat, lng],
    // center: [77.1016, 28.6375],
    // zoom: 12,
    // bearing: 0,
    // pitch: 0,
    // center: [82.8, 23.88],
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
  }
  map.flyTo(temp)
}