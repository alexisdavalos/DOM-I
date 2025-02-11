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
console.log(siteContent.cta.h1)
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Set CTA SRC attribute
let ctaImg = document.getElementById("cta-img");
ctaImg.src = [siteContent["cta"]["img-src"]]

//Line Breaks 

//Populate nav links
const Links = document.querySelectorAll('a');

Links.forEach((link,index) => {
  link.textContent = siteContent["nav"][`nav-item-${index+1}`];
  link.style.color = 'green';
})

//Create New Nav Items
const navSelector = document.querySelector('nav');
const newNavItem = document.createElement('a');
const lastNavItem = document.createElement('a');
newNavItem.href = "#";
newNavItem.textContent = "First";
newNavItem.style = "color:blue";
lastNavItem.href="#";
lastNavItem.style="color:red;";
lastNavItem.textContent = "Last";
navSelector.prepend(newNavItem);
navSelector.append(lastNavItem);

//Add CTA Text
let ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = [siteContent["cta"]["h1"]];

//Add CTA Button Text

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = [siteContent["cta"]["button"]];

//Add CTA Button Event

ctaButton.addEventListener('click', (event) => {
  alert('You Did It!')
})

//Main Content
let siteText = document.querySelectorAll('.text-content p')
let siteType = ["features", "about", "services", "product", "vision"];
let siteContact = ["features", "about", "services", "product", "vision"];
siteText.forEach((item, index) =>{
  siteText[index].textContent = [siteContent["main-content"][`${siteType[index]}-content`]];
})
// siteText[0].textContent = [siteContent["main-content"]["features-content"]];
// siteText[1].textContent = [siteContent["main-content"]["about-content"]];
// siteText[2].textContent = [siteContent["main-content"]["services-content"]];
// siteText[3].textContent = [siteContent["main-content"]["product-content"]];
// siteText[4].textContent = [siteContent["main-content"]["vision-content"]];

//Main Content H4

let siteh4 = document.querySelectorAll(".text-content h4");
siteText.forEach((item, index) =>{
  siteh4[index].textContent = [siteContent["main-content"][`${siteType[index]}-h4`]];
})
// siteh4[0].textContent = [siteContent["main-content"]["features-h4"]];
// siteh4[1].textContent = [siteContent["main-content"]["about-h4"]];
// siteh4[2].textContent = [siteContent["main-content"]["services-h4"]];
// siteh4[3].textContent = [siteContent["main-content"]["product-h4"]];
// siteh4[4].textContent = [siteContent["main-content"]["vision-h4"]];

//Middle Img Src

let middleImg = document.querySelector('.middle-img');
middleImg.src = [siteContent["main-content"]["middle-img-src"]];

//Contact

let contactTitle = document.querySelector('.contact h4');
let contactParagraph = document.querySelectorAll('.contact p');
contactTitle.textContent = [siteContent["contact"]["contact-h4"]];
contactParagraph[0].textContent = [siteContent["contact"]["address"]];
contactParagraph[1].textContent = [siteContent["contact"]["phone"]];
contactParagraph[2].textContent = [siteContent["contact"]["email"]];

//Footer 

let footerText = document.querySelector('footer p');
footerText.textContent = [siteContent["footer"]["copyright"]]


