//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}


  const container = document.getElementById('scrollContent');
  container.innerHTML += container.innerHTML;

window.addEventListener("scroll", () => {
  const scrollUp = document.getElementById("scroll-up");
  if (window.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});

// Check that firebase is loaded
console.log("Firebase object:", firebase);

// Your Firebase config - make sure this matches your project exactly
const firebaseConfig = {
  apiKey: "AIzaSyDW2BWFp5EvQmfMPUvgNYaqmYde0S49uOI",
  authDomain: "form-archdot.firebaseapp.com",
  projectId: "form-archdot",
  storageBucket: "form-archdot.appspot.com",
  messagingSenderId: "614347302945",
  appId: "1:614347302945:web:f3491281632234c7265b60"
};

// Initialize Firebase App
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Subscribe function to be called on button click
function subscribe() {
  const emailInput = document.getElementById('subscriber-email');
  const email = emailInput.value.trim();

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Add email to Firestore collection 'subscribers'
  db.collection('subscribers').add({
    email: email,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then((docRef) => {
    console.log('Document written with ID:', docRef.id);
    alert('Thank you for subscribing!');
    emailInput.value = '';
  })
  .catch((error) => {
    console.error('Error adding document:', error);
    alert('Error saving email: ' + error.message);
  });
}
let valueDisplays = document.querySelectorAll(".num");
let interval = 100;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

let valueDis = document.querySelectorAll(".num1");
let interval1 = 500000;
5000000
valueDis.forEach((valueDis) => {
  let startValue = 4999900;
  let endValue = parseInt(valueDis.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDis.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

let valueDi = document.querySelectorAll(".num2");
let intervall = 140;

valueDi.forEach((valueDi) => {
  let startValue = 140;
  let endValue = parseInt(valueDi.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDi.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

let valueD = document.querySelectorAll(".num3");
let intervalll = 0;

valueD.forEach((valueD) => {
  let startValue = 15;
  let endValue = parseInt(valueD.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueD.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

const menuOpen = document.querySelector('.MenuOpen');
const closeTag = document.querySelector('.CloseTag');
const navLinks = document.querySelectorAll('header nav:not(.Logo):not(.MenuOpen):not(.CloseTag)');

menuOpen.addEventListener('click', () => {
  navLinks.forEach(link => link.style.display = 'block');
  menuOpen.style.display = 'none';
  closeTag.style.display = 'inline';
});

closeTag.addEventListener('click', () => {
  navLinks.forEach(link => link.style.display = 'none');
  menuOpen.style.display = 'inline';
  closeTag.style.display = 'none';
});

const coffees = [
    { name:" Guji Uraga", variety:"74112 Serto 87", score:87, process:"Natural", origin:"Ethiopia", altitude:"2000m", notes:"Dark Cocoa, Blueberry, Rueherb, Complex", price:2820, "price(SAR)/KG":47, stock:"In Stock" },
  { name:"Guji Shakiso", variety:"74112 Serto 86.5", score:86.5, process:"Natural", origin:"Ethiopia", altitude:"1950m", notes:"Clean, Fruity, Honey", price:2820, "price(SAR)/KG":47, stock:"In Stock" },
  { name:"Guji Hambela", variety:"Gebrina 87", score:87, process:"Natural", origin:"Ethiopia", altitude:"1980m", notes:"Peach, Tropical Fruit, Complex, Floral", price:2700, "price(SAR)/KG":47, stock:"In Stock" },
  { name:"Guji Hambela", variety:"74518 86.75", score:86.75, process:"Natural Yeast", origin:"Ethiopia", altitude:"2100m", notes:"Intense Passion, Strawberry, Mango", price:3720, "price(SAR)/KG":62, stock:"Sold Out" },
  { name:" Guji Hambela", variety:"Kurumie 88", score:88, process:"Anaerobic", origin:"Ethiopia", altitude:"2050m", notes:"Intense Passion, Strawberry, Mango", price:3360, "price(SAR)/KG":56, stock:"Coming Soon" },
  { name:"Guji Uraga", variety:"74518 87", score:87, process:"Anaerobic", origin:"Ethiopia", altitude:"2000m", notes:"Nuts, Creamy, Milk Chocolate", price:3300, "price(SAR)/KG":55, stock:"Coming Soon" },
  { name:" Guji Hambela", variety:"Kurumie 86", score:86, process:"Wine", origin:"Ethiopia", altitude:"1980m", notes:"Blackberry, Raspberry, Grape, Citrus", price:3240, "price(SAR)/KG":54, stock:"In Stock" },
  { name:" Guji Uraga", variety:"Heirloom 86", score:86, process:"Wine", origin:"Ethiopia", altitude:"2020m", notes:"Grape, Blackberry, Soft Red Wine", price:3240, "price(SAR)/KG":54, stock:"In Stock" },
  { name:"Guji Hambela", variety:"Heirloom 86.75", score:86.75, process:"Wine", origin:"Ethiopia", altitude:"2000m", notes:"Lavender, Jasmine, Bergamot", price:3300, "price(SAR)/KG":55, stock:"In Stock" },
  { name:" Gesha Farm", variety:"Gesha 89.75", score:89.75, process:"Anaerobic", origin:"Ethiopia", altitude:"2100m", notes:"Jasmine, Bright Acidity, Tropical Fruit", price:3840, "price(SAR)/KG":64, stock:"Coming Soon" },
  { name:" Yirgacheffe Beloya", variety:"Heirloom 89", score:89, process:"Natural Yeast", origin:"Ethiopia", altitude:"2000m", notes:"Strawberry, Mango, Peach, Tropical", price:3720, "price(SAR)/KG":62, stock:"In Stock" },
  { name:" Yirgacheffe Adado", variety:"Kurumie 89", score:89, process:"Natural", origin:"Ethiopia", altitude:"1980m", notes:"Jasmine, Coffee Blossom, Guava, Peach", price:2880, "price(SAR)/KG":48, stock:"In Stock" },
  { name:"Guji Gelanabaya", variety:"Kurumie 88.75", score:88.75, process:"Natural", origin:"Ethiopia", altitude:"1970m", notes:"Citrus, Floral, Lemongrass", price:2820, "price(SAR)/KG":47, stock:"In Stock" },
  { name:"Yirgacheffe Beloya", variety:"Wellisho 88.5", score:88.5, process:"Natural", origin:"Ethiopia", altitude:"1960m", notes:"Dark Chocolate, Nuts, Raisin, Lime", price:2820, "price(SAR)/KG":47, stock:"In Stock" },
  { name:"Yirgacheffe Adado", variety:"74110 86", score:86, process:"Natural", origin:"Ethiopia", altitude:"1985m", notes:"Bright Acidity, Peach, Cranberry, Elderberry", price:2640, "price(SAR)/KG":44, stock:"Sold Out" },
  { name:"Guji Hambela", variety:"Heirloom 88", score:88, process:"Natural", origin:"Ethiopia", altitude:"1990m", notes:"Dark Cocoa, Flower, Coffee Blossom", price:2820, "price(SAR)/KG":47, stock:"In Stock" },
  { name:" Yirgacheffe Beloya", variety:"Kurumie 81.75", score:81.75, process:"Washed", origin:"Ethiopia", altitude:"1900m", notes:"Floral Aroma, Orange, Citrus, Bright, Balanced", price:1400, "price(SAR)/KG":28, stock:"Sold Out" },
  { name:"Yirgacheffe Chilchel", variety:"Heirloom 82", score:82, process:"Natural", origin:"Ethiopia", altitude:"1920m", notes:"Dark Chocolate, Creamy, Nuts, Fruit", price:1920, "price(SAR)/KG":32, stock:"Sold Out" }
,
  { name:"Mogiana", variety:"Catuai 83", score:83, process:"Natural", origin:"Brazil", altitude:"900m", notes:"Peach, Dark Cocoa, Creamy, Nutty", price:2100, "price(SAR)/KG":35, stock:"In Stock" },
  { name:"Huila San", variety:"Caturra 84", score:84, process:"Washed", origin:"Colombia", altitude:"1600m", notes:"Lemon, Fruit Tea, Light Acidity", price:2660, "price(SAR)/KG":38, stock:"In Stock" },
  { name:"Villa Rica", variety:"Castilo 87", score:87, process:"Double Natural", origin:"Colombia", altitude:"1700m", notes:"Dark Chocolate, Berries, Red Apple", price:3150, "price(SAR)/KG":45, stock:"In Stock" },
  { name:"Salvador San Carlos", variety:"Bourbon 83", score:83, process:"Washed", origin:"El Salvador", altitude:"1400m", notes:"Sweet, Dark Chocolate, Nuts, Creamy", price:3312, "price(SAR)/KG":48, stock:"Arriving" },
  ];

const countryLogos = {
    "Ethiopia": "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg",
  "Brazil": "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
  "Colombia": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
  
  "El Salvador": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAA0CAMAAAAwlq9dAAABFFBMVEUAR6v///8ANKUAPagAP6iIm82TpNHi5vL///3i5vX/+un/8Lv/98//8LD/65L/99P/99f/6p3/77b//vX/88e1xN34+ff/7Ke6uqvr5db68tWAr3Zqfa7k5OK5u4PN0NRthaWYwJL/++Kz0LTB1rVwhcfQxZr91tPHwqKmtNWyx6DN4dLv+PKJqnqbqbprfrivusLz2MH8wLro1rWiq8V4jcCSnqCfvJT/5ngLjB6xp4TR48z53sD/6uqXkHQDQo4AiQDJzLVJoi0AlABhpFeFrpYeWaBMlT8/VJJMipIRk6QhjaYXjbxahaEpToE4lzxykjyCnqduh5dQkC3Jzd6JxIlLo1UAegB0sXBBZ4s7bnaq0aw08HSGAAABQklEQVRYhe3V61KCQBTA8T2lBQsCcomSlITKCi0zu5hdrCwLI8MiLN//PfJDD3CcWaam2d8MH89/GWAXQjiO47h/YSFDZBlPFMXZNccAATRBLiiqKgv4CXxcK+pUNagkU3QeHZfMWdNaATBsg3VcLYAGsLoGUAJqso0bGjjrZaFSAXejCgry3pFx0/M3t6ztWm1nN78XyBLLuKDXG/sHzcNW66h9fHJqKEzjZ34nZ513Ly7hyrruBTbug8G+0K5Dbm7vep3+vfswCXSmcSUYPD6FYTgcPkcvg7rENG6WRq9RHEdRPB6/9SnFTSHjVPIbVUtst9+txPF1jWkcit5H6jtueTJNE89GDmHj1C4Fo/TzK50EagG7/9FnC1X0adKMk6lkI5/4PKciyD+r4CfIUobIYoZ++xfOcRz3x+QyRPIZ+gZJIS6pfPh1EQAAAABJRU5ErkJggg=="
};

const resultsDiv=document.getElementById("results");
const searchInput=document.getElementById("search");
const processSelect=document.getElementById("process");
const stockSelect=document.getElementById("stock");
const priceRangeSelect=document.getElementById("priceRange");
const sortSelect=document.getElementById("sort");

function renderByCountry(list){
  resultsDiv.innerHTML="";
  if(list.length===0){
    resultsDiv.innerHTML="<p style='text-align:center;color:#777;'>No results found.</p>";
    return;
  }
  const countries = [...new Set(list.map(c => c.origin))];
  countries.forEach(country=>{
    const countrySection = document.createElement("div");
    countrySection.className="country-section";

    const header = document.createElement("div");
    header.className="country-header";
    header.innerHTML=`<img src="${countryLogos[country]||''}" alt="${country}"><h2>${country}</h2>`;
    countrySection.appendChild(header);

    const grid = document.createElement("div");
    grid.className="country-results";

    list.filter(c=>c.origin===country).forEach(c=>{
      const div=document.createElement("div");
      div.className="card";
      div.innerHTML=`
      
        <div class="card-body">
          <h3>${c.name}</h3>
          <p class="meta">Variety: ${c.variety} </p>
        <p class="meta" > Score: ${c.score}</p>
          <p class="meta">Process: ${c.process}</p>
          <p class="meta">Altitude: ${c.altitude}</p>
          <p class="notes">${c.notes}</p>
       
          <p class="price-per-kg">Price per KG: SAR ${c["price(SAR)/KG"]}</p>
        </div>
      `;
      grid.appendChild(div);
    });

    countrySection.appendChild(grid);
    resultsDiv.appendChild(countrySection);
  });
}

function applyFilters() {
  const term = searchInput.value.toLowerCase();
  const process = processSelect.value;
  const stock = stockSelect.value;
  const priceFilter = priceRangeSelect.value;
  const sortValue = sortSelect.value;

  let filtered = coffees.filter(c => {
    if(term && !(c.name.toLowerCase().includes(term) || c.notes.toLowerCase().includes(term) || c.variety.toLowerCase().includes(term) || c.origin.toLowerCase().includes(term))) return false;
    if(process && c.process !== process) return false;
    if(stock && c.stock !== stock) return false;
    if(priceFilter==="2200" && c.price>2200) return false;
    if(priceFilter==="2800" && (c.price<2200 || c.price>2800)) return false;
    if(priceFilter==="3000" && c.price<=2800) return false;
    return true;
  });

  if(sortValue==="low-high"){ filtered.sort((a,b)=>a.price-b.price);}
  else if(sortValue==="high-low"){ filtered.sort((a,b)=>b.price-a.price);}

  renderByCountry(filtered);
}

[searchInput, processSelect, stockSelect, priceRangeSelect, sortSelect].forEach(el=>el.addEventListener("input",applyFilters));

renderByCountry(coffees);