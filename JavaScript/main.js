document.addEventListener('DOMContentLoaded', function() {
    const presentacionContenido = document.querySelector('.presentacion-contenido');
    const contactoBtn = document.querySelector('.contacto-btn');

    presentacionContenido.addEventListener('mouseenter', () => {
        contactoBtn.style.display = 'block';
    });

    presentacionContenido.addEventListener('mouseleave', () => {
        contactoBtn.style.display = 'none';
    });
});


// Función para expandir la imagen al hacer clic
function expandirImagen(img) {
    const imagenExpandida = document.createElement("div");
    imagenExpandida.className = "imagen-expandida";
    
    const imagen = document.createElement("img");
    imagen.src = img.src;
    imagen.alt = img.alt;

    const botonCerrar = document.createElement("div");
    botonCerrar.className = "cerrar";
    botonCerrar.innerHTML = "X";
    botonCerrar.onclick = function () {
        cerrarImagen(imagenExpandida);
    };

    imagenExpandida.appendChild(imagen);
    imagenExpandida.appendChild(botonCerrar);
    document.body.appendChild(imagenExpandida);

    function cerrarImagen(imagenExpandida) {
        // Remover la imagen expandida del DOM para ocultarla
        document.body.removeChild(imagenExpandida);}
};




