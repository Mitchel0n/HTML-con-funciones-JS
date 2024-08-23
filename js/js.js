

    const animales = [
            {
                "Nombre": "Canguro",
                "Especie": "Mamífero",
                "Tipo de alimentacion": "sopa",
                "Edad": 10
            },
            {
                "Nombre": "Jirafa",
                "Especie": "Mamífero",
                "Tipo de alimentacion": ["Vegetales","Hojas"],
                "Edad": 12
            },
            {
                "Nombre": "Hipopotamo",
                "Especie": "Mamífero",
                "Tipo de alimentacion": ["Vegetales", "Frutas"],
                "Edad": 6
            },
            {
                "Nombre": "Lagarto",
                "Especie": "Reptil",
                "Tipo de alimentacion": "Carne",
                "Edad": 4
            },
            {
                "Nombre": "Araña",
                "Especie": "Antrópodo",
                "Tipo de alimentacion": "Insectos",
                "Edad": 2
            },
            {
                "Nombre": "Colibrí",
                "Especie": "Ave",
                "Tipo de alimentacion": "Semillas",
                "Edad": 7
            },
            {
                "Nombre": "Cocodrilo",
                "Especie": "Mamífero",
                "Tipo de alimentacion": "Carne",
                "Edad": 10
            }];
            const tabla = document.getElementById('tablaAnimales');
            const filtroNombre = document.getElementById('filtroNombre');
    
            // Función para renderizar la tabla
            function renderizarTabla() {
                const filtro = filtroNombre.value.toLowerCase();
                const animalesFiltrados = animales.filter(animal => animal.Nombre.toLowerCase().includes(filtro));
    
                tabla.innerHTML = ''; // Limpiamos la tabla
    
                animalesFiltrados.forEach(animal => {
                    const fila = document.createElement('tr');
                    fila.innerHTML = `
                        <td>${animal.Nombre}</td>
                        <td>${animal.Especie}</td>
                        <td>${Array.isArray(animal['Tipo de alimentacion']) ? animal['Tipo de alimentacion'].join(', ') : animal['Tipo de alimentacion']}</td>
                        <td>${animal.Edad}</td>
                    `;
                    tabla.appendChild(fila);
                });
            }
    
            // Función para ordenar ascendente
            function ordenarAscendente() {
                animales.sort((a, b) => a.Nombre.localeCompare(b.Nombre));
                renderizarTabla();
            }
    
            // Función para ordenar descendente
            function ordenarDescendente() {
                animales.sort((a, b) => b.Nombre.localeCompare(a.Nombre));
                renderizarTabla();
            }
    
            // Evento para filtrar al escribir en el cuadro de texto
            filtroNombre.addEventListener('input', renderizarTabla);
    
            // Renderizamos la tabla inicialmente
            renderizarTabla();



