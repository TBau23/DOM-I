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


// Creating the Nav bar
const services = document.querySelector('a');
services.textContent = siteContent['nav']['nav-item-1'];
const product = services.nextElementSibling;
product.textContent = siteContent['nav']['nav-item-2'];
const vision = product.nextElementSibling;
vision.textContent = siteContent['nav']['nav-item-3'];
const features = vision.nextElementSibling;
features.textContent = siteContent['nav']['nav-item-4'];
const about = features.nextElementSibling;
about.textContent = siteContent['nav']['nav-item-5'];
const contact = about.nextElementSibling;
contact.textContent = siteContent['nav']['nav-item-6'];

// cta section

const bigDom = document.querySelector('.cta h1');
bigDom.textContent = siteContent['cta']['h1'];
const startButton = document.querySelector('.cta button');
startButton.textContent = siteContent['cta']['button'];
const ctaImg = document.querySelector('.cta img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);


//main content section

const featuresBoxTitle = document.querySelector('.top-content h4');
featuresBoxTitle.textContent = siteContent['main-content']['features-h4'];
const featuresBoxText = document.querySelector('.top-content p');
featuresBoxText.textContent = siteContent['main-content']['features-content'];

const aboutBoxTitle = document.querySelector('div.top-content > div:nth-child(2) > h4');
aboutBoxTitle.textContent = siteContent['main-content']['about-h4'];
const aboutBoxText = document.querySelector('div.top-content > div:nth-child(2) > p');
aboutBoxText.textContent = siteContent['main-content']['about-content'];

const aboutImg = document.querySelector('#middle-img');
aboutImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const servicesBoxTitle = document.querySelector('.bottom-content h4');
servicesBoxTitle.textContent = siteContent['main-content']['services-h4'];
const servicesBoxText = document.querySelector('.bottom-content p');
servicesBoxText.textContent = siteContent['main-content']['services-content'];

const productBoxTitle = document.querySelector('div.bottom-content > div:nth-child(2) > h4');
productBoxTitle.textContent = siteContent['main-content']['product-h4'];
const productBoxText = document.querySelector('div.bottom-content > div:nth-child(2) > p');
productBoxText.textContent = siteContent['main-content']['product-content'];

const visionBoxTitle = document.querySelector('div.bottom-content > div:nth-child(3) > h4');
visionBoxTitle.textContent = siteContent['main-content']['vision-h4'];
const visionBoxText = document.querySelector('div.bottom-content > div:nth-child(3) > p');
visionBoxText.textContent = siteContent['main-content']['vision-content'];

// Contact section

const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent['contact']['contact-h4'];

const address = document.querySelector('.contact p');
address.textContent = siteContent['contact']['address'];

const phoneNum = address.nextElementSibling;
phoneNum.textContent = siteContent['contact']['phone'];

const email = phoneNum.nextElementSibling;
email.textContent = siteContent['contact']['email'];

// footer 
const footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];

// styles and additional tasks

const nav = document.querySelector('nav');

const prependExample = document.createElement('a');
prependExample.textContent = 'Prepend';

nav.prepend(prependExample);

const appendExample = document.createElement('a');
appendExample.textContent = 'Appended Child'

nav.appendChild(appendExample);

const allLinks = document.querySelectorAll('a');

allLinks.forEach(link => {
  link.style.color = 'green';
})



