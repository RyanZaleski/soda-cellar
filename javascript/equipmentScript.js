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

// Show and hide drinks dispenser sections

const revolver = document.querySelector('#revolverSection')
const mustang = document.querySelector('#mustangSection')
const tower = document.querySelector('#towerSection')
const gun = document.querySelector('#gunSection')

document.querySelector('#revolver').addEventListener('click', showRevolver) 
document.querySelector('#mustang').addEventListener('click', showMustang)
document.querySelector('#tower').addEventListener('click', showTower)
document.querySelector('#gun').addEventListener('click', showGun)


function showRevolver(){
	revolver.classList.toggle('hidden')
	mustang.classList.add('hidden')
	tower.classList.add('hidden')
	gun.classList.add('hidden')
	
	document.querySelector('#revolver').classList.add('bg-zinc-400', 'text-white')
	document.querySelector('#mustang').classList.remove('bg-zinc-400', 'text-white')
	document.querySelector('#tower').classList.remove('bg-zinc-400', 'text-white')
	document.querySelector('#gun').classList.remove('bg-zinc-400', 'text-white')
}

function showMustang(){
	mustang.classList.toggle('hidden')
	revolver.classList.add('hidden')
	tower.classList.add('hidden')
	gun.classList.add('hidden')
	
	document.querySelector('#mustang').classList.add('bg-zinc-400', 'text-white')
	document.querySelector('#revolver').classList.remove('bg-zinc-400', 'text-white')
	document.querySelector('#tower').classList.remove('bg-zinc-400', 'text-white')
	document.querySelector('#gun').classList.remove('bg-zinc-400', 'text-white')
}

function showTower(){
	tower.classList.toggle('hidden')
	revolver.classList.add('hidden')
	mustang.classList.add('hidden')
	gun.classList.add('hidden')
	
	document.querySelector('#tower').classList.add('bg-zinc-400', 'text-white')
	document.querySelector('#revolver').classList.remove('bg-zinc-400', 'text-white')
	document.querySelector('#mustang').classList.remove('bg-zinc-400', 'text-white')
	document.querySelector('#gun').classList.remove('bg-zinc-400', 'text-white')
}

function showGun(){
	gun.classList.toggle('hidden')
	revolver.classList.add('hidden')
	mustang.classList.add('hidden')
	tower.classList.add('hidden')
	
	document.querySelector('#gun').classList.add('bg-zinc-400', 'text-white')
	document.querySelector('#revolver').classList.remove('bg-zinc-400', 'text-white')
	document.querySelector('#mustang').classList.remove('bg-zinc-400', 'text-white')
	document.querySelector('#tower').classList.remove('bg-zinc-400', 'text-white')
}