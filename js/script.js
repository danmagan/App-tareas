const agregar = document.querySelector("#agregar");

const tareaInput = document.querySelector("#tareaInput");

const lista = document.querySelector("#lista");

agregar.addEventListener("click", comprobar);

function comprobar(){
	if(tareaInput.value === ""){
		alert("El Campo No Puede Estar Vacio");
	}
	else{
		agregarTarea();
	}
}

function agregarTarea(){
	let nuevaTarea = document.createElement("li");

	nuevaTarea.innerText = tareaInput.value;

	lista.appendChild(nuevaTarea);

	tareaInput.value = "";

	nuevaTarea.addEventListener("click", borrarTarea);
}

for( let i = 0; i <= lista.children.length -1; i++){

	lista.children[i].addEventListener("click", borrarTarea);
}

function borrarTarea(){
	this.parentNode.removeChild(this);
}









