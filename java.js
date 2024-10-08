const mifoto = document.querySelector(".profile-pic")


function toggleDetails(project) {
    const details = project.querySelector('.details');
    details.style.display = details.style.display === 'none' || details.style.display === '' ? 'block' : 'none';
}

function saludo(){
    alert("Hola Carlita")
}


function esconder(){
    mifoto.remove()

}