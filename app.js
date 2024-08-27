const html_header = `
            <!DOCTYPE html>
            <head>
                <meta charset="UTF-8">
                <title>Chocolate</title>
                <!-- Bulma CSS -->
                <link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css" rel="stylesheet">
            </head>
            <body class="has-background-light">
                    <!-- Barra de navegación -->
                <nav class="navbar has-background-light-brown" role="navigation" aria-label="main navigation" style="background-color: #D2B48C;">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="#">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmidKKEE5rZhJMOAYpw6TF8bQpJQXptIdP9Q&s" alt="Logo" style="height: 60px;">
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <a href="3000" class="button is-light">
                                        Inicio
                                    </a>
                                    <a href="#" class="button is-light">
                                        Menú
                                    </a>
                                    <a href="#" class="button is-light">
                                        Contacto
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
`;
const html_footer = `
    <footer class="footer">
    <div class="content has-text-centered">
        <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
        The source code is licensed
        <a href="https://opensource.org/license/mit">MIT</a>. The
        website content is licensed
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//"
            >CC BY NC SA 4.0</a
        >.
        </p>
    </div>
    </footer>
`;

//setTimeout recibe como parámetro, una función, y la cantidad de segundos
//que van a pasar antes de que se ejecute la función.

setTimeout(() => {
    console.log("12 segundos");
}, 12000);
//http es el módulo que contiene todas las funciones de un servidor http
const http = require('http');
const server = http.createServer((request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');

    if (request.url == "/preparar" && request.method == "GET") {
        response.write(`
            ${html_header}
                    <header>
                    <h1 class="title">Preparar Pedido</h1>
                    </header>
                <main>
                    <form action="/preparar" method="POST">
                        <div class="field">
                            <label for="nombre" class="label">Nombre</label>
                            <div class="control">
                                <input id="nombre" name="nombre" class="input" type="text" placeholder="Ernesto Guillen" required>
                            </div>
                            <label for="telefono" class="label">Teléfono</label>
                            <div class="control">
                                <input id="telefono" name="telefono" class="input" type="number" placeholder="442-xxxx-xxxx">
                            </div>
                        </div>           
                    </form>
                </main>

                <form action="#">
                    <div class="field">
                        <label class="radio">
                            <input name="tipo_chocolate" type="radio" checked />
                            Chocolate blanco
                        </label>
                    </div>
                    <div class="field">
                        <label class="radio">
                            <input name="tipo_chocolate" type="radio" />
                            Chocolate tradicional
                        </label>
                    </div>
                    <div class="field">
                        <label class="radio">
                            <input name="tipo_chocolate" type="radio" />
                            Chocolates pequeños
                        </label>
                    </div>
                </form>
                <button class="button is-dark" type="submit" name="action">Submit</button>
            ${html_footer}
                `);
            response.end();
            
    } else if (request.url == "/preparar" && request.method == "POST") {
        const datos = [];
        
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const tipo_chocolate = datos_completos.split("&")[1].split("=")[1];
            console.log(`Preparando barra de ${tipo_chocolate}`);
        });

    } else {
        response.write(`
            ${html_header}
                <div class="container">
                    <h1 class="title has-text-dark">Chocolate</h1>
                    <h2 class="subtitle has-text-dark">Menú:</h2>
                    <table class="table is-striped">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Porcentaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Chocolate con leche</td>
                                <td>50%, 62%, 70%</td>
                            </tr>
                            <tr>
                                <td>Chocolate clásico</td>
                                <td>62%, 70%, 100%</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="/preparar" class="button is-dark" id="boton_preparar">Realizar pedido</a>
                    
                    <br>

                    <img width="30%" id="imagen_chocolate" src="" alt=""/>
                    <br>

                    <div class="container">
                        <!-- Botón que despliega el cuadro de información -->
                        <a class="button is-dark" id="showInfoButton">Mostrar Información</a>
                    
                        <!-- Cuadro de información oculto -->
                        <div id="infoBox" class="card" style="display: none;">
                        <div class="card-content">
                            <span class="card-title">Título de la Información</span>
                            <p>Este es el contenido del cuadro de información. Puedes agregar más detalles aquí.</p>
                        </div>
                        <div class="card-action">
                            <a href="#" id="hideInfoButton">Ocultar</a>
                        </div>
                        </div>
                    </div>
                    <div class="container">
                    <div class="card-title">
                        <div class="card">
                        </div>
                            <span class="card-title">Comandos de git</span>
                        <p>
                            <ul>
                                <li>git clone [repositorio]</li>
                                <li>git add -A</li>
                                <li>git commit -m "mensaje"</li>
                                <li>git push</li>
                                <li>git pull</li>
                                <li>git merge [rama_a_integrar]</li>
                            </ul>            
                        </p>
                            <blockquote>
                                Material Design, desarrollado por Google, es un lenguaje de diseño que usa metáforas de materiales físicos, como profundidad y sombras, para crear interfaces intuitivas y estéticas. Se enfoca en movimientos fluidos, espaciado claro, retroalimentación interactiva, y consistencia en colores y tipografía para una experiencia de usuario coherente y atractiva.
                            </blockquote>
                    </div>
                    </div>
                </div>
                ${html_footer}
            </body>
            </html>
        `);
    }
    
    response.end();
});
server.listen(3000);
