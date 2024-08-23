const sourceDiv=document.getElementById("source")
        const destinationDiv=document.getElementById("destination")

        const tempContent = sourceDiv.innerHTML;
        sourceDiv.innerHTML = destinationDiv.innerHTML;
        destinationDiv.innerHTML = tempContent;


        const titulo = document.querySelector('h1');
        titulo.textContent = 'titulo1';


        titulo.innerHTML = '<p>titulo reemplazado por parrafo</p>';

        const nuevoParrafo = document.createElement('p');
         nuevoParrafo.textContent = 'Este es otro párrafo agregado al body.';
        document.body.appendChild(nuevoParrafo);
