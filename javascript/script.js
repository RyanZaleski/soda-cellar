const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})





// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Menu on products page

const branded = document.querySelector('#brandedSection')
const sparkling = document.querySelector('#sparklingSection')
const juices = document.querySelector('#juicesSection')
const cordials = document.querySelector('#cordialsSection')
const mixers = document.querySelector('#mixersSection')



document.querySelector('#branded').addEventListener('click', showBranded) 
document.querySelector('#sparkling').addEventListener('click', showSparkling)
document.querySelector('#juices').addEventListener('click', showJuices)
document.querySelector('#cordials').addEventListener('click', showCordials)
document.querySelector('#mixers').addEventListener('click', showMixers)

function showBranded(){
	branded.classList.toggle('hide')
	sparkling.classList.add('hide')
	juices.classList.add('hide')
	cordials.classList.add('hide')
	mixers.classList.add('hide')

    document.querySelector('#branded').classList.add('font-bold')
	document.querySelector('#sparkling').classList.remove('font-bold')
	document.querySelector('#juices').classList.remove('font-bold')
	document.querySelector('#cordials').classList.remove('font-bold')
	document.querySelector('#mixers').classList.remove('font-bold')
}

function showSparkling(){
	sparkling.classList.toggle('hide')
	branded.classList.add('hide')
	juices.classList.add('hide')
	cordials.classList.add('hide')
	mixers.classList.add('hide')

    document.querySelector('#sparkling').classList.add('font-bold')
	document.querySelector('#branded').classList.remove('font-bold')
	document.querySelector('#juices').classList.remove('font-bold')
	document.querySelector('#cordials').classList.remove('font-bold')
	document.querySelector('#mixers').classList.remove('font-bold')
}

function showJuices(){
	juices.classList.toggle('hide')
	sparkling.classList.add('hide')
	branded.classList.add('hide')
	cordials.classList.add('hide')
	mixers.classList.add('hide')

    document.querySelector('#juices').classList.add('font-bold')
	document.querySelector('#sparkling').classList.remove('font-bold')
	document.querySelector('#branded').classList.remove('font-bold')
	document.querySelector('#cordials').classList.remove('font-bold')
	document.querySelector('#mixers').classList.remove('font-bold')
}

function showCordials(){
	cordials.classList.toggle('hide')
	sparkling.classList.add('hide')
	juices.classList.add('hide')
	branded.classList.add('hide')
	mixers.classList.add('hide')

    document.querySelector('#cordials').classList.add('font-bold')
	document.querySelector('#sparkling').classList.remove('font-bold')
	document.querySelector('#juices').classList.remove('font-bold')
	document.querySelector('#branded').classList.remove('font-bold')
	document.querySelector('#mixers').classList.remove('font-bold')
}

function showMixers(){
	mixers.classList.toggle('hide')
	sparkling.classList.add('hide')
	juices.classList.add('hide')
	cordials.classList.add('hide')
	branded.classList.add('hide')

    document.querySelector('#mixers').classList.add('font-bold')
	document.querySelector('#sparkling').classList.remove('font-bold')
	document.querySelector('#juices').classList.remove('font-bold')
	document.querySelector('#cordials').classList.remove('font-bold')
	document.querySelector('#branded').classList.remove('font-bold')
}






// CSS Animations


const faders = document.querySelectorAll('.fade-in')
const sliders = document.querySelectorAll('.slide-in');



const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

 