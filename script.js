const width = document.getElementById('width');
const height = document.getElementById('height');

function updateSize(){
	height.textContent = window.innerHeight;
	width.textContent = window.innerWidth;
}

window.addEventListener('resize', updateSize);