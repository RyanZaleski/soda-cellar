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