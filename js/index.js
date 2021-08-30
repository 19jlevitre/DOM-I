const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

nav.prepend(newItem2);

const newItem = document.
createElement('a');
newItem.textContent = 'Blog';
newItem.href = '#';
document.querySelector('nav').appendChild(newItem);

const newItem2 = document.createElement('a');
newItem2.textContent = 'Jobs';
newItem2.href = '#';

 

let navStuff = document.querySelectorAll('nav a');
navStuff.forEach(navStuff => console.log(navStuff.style.color = 'green'));
navStuff[0].textContent = siteContent['nav']['nav-item-1'];

navStuff[1].textContent = siteContent['nav']['nav-item-2'];

navStuff[2].textContent = siteContent['nav']['nav-item-3'];

navStuff[3].textContent = siteContent['nav']['nav-item-4'];

navStuff[4].textContent = siteContent['nav']['nav-item-5'];

navStuff[5].textContent = siteContent['nav']['nav-item-6'];





 

// navStuff.textContent = 'Product';
const imgBig = document.getElementById('cta-img');
imgBig.setAttribute('src', siteContent['cta']['img-src']);

const ctaText = document.querySelector('.cta-text');

const awesomeTitle = document.querySelector('h1');
awesomeTitle.textContent = siteContent['cta']['h1'];

// ctaText.style.width = '220px';
// ctaText.style.display = 'flex';
// ctaText.style.flexDirection = 'wrap';
awesomeTitle.innerHTML = 'DOM <br> Is <br> Awesome';

const buttonName = document.querySelector('button');
buttonName.textContent = siteContent['cta']['button'];


const imgMid = document.getElementById('middle-img');
imgMid.setAttribute('src', siteContent['main-content']['middle-img-src']);

let textContentFeature = document.querySelectorAll('h4');
 
textContentFeature[0].textContent = siteContent['main-content']['features-h4'];
textContentFeature[1].textContent = siteContent['main-content']['about-h4'];

textContentFeature[2].textContent = siteContent['main-content']['services-h4'];
textContentFeature[3].textContent = siteContent['main-content']['product-h4'];

textContentFeature[4].textContent = siteContent['main-content']['vision-h4'];

textContentFeature[5].textContent = siteContent['contact']['contact-h4'];

let bodyText = document.querySelectorAll('p');

bodyText[0].textContent = siteContent['main-content']['features-content'];

bodyText[1].textContent = siteContent['main-content']['about-content'];

bodyText[2].textContent = siteContent['main-content']['services-content'];

bodyText[3].textContent = siteContent['main-content']['product-content'];

bodyText[4].textContent = siteContent['main-content']['vision-content'];

bodyText[5].textContent = siteContent['contact']['address'];

bodyText[6].textContent = siteContent['contact']['phone'];
bodyText[7].textContent = siteContent['contact']['email'];
bodyText[8].textContent = siteContent['footer']['copyright'];