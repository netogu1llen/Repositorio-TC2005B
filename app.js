//setTimeout recibe como parámetro, una función, y la cantidad de segundos
//que van a pasar antes de que se ejecute la función.
setTimeout(() => {
    console.log("12 segundos");
}, 12000);
//http es el módulo que contiene todas las funciones de un servidor http
const http = require('http');
const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');


    if (request.url == "/preparar") {
        response.write(`
            <!DOCTYPE html>
            <head>
                <meta charset="UTF-8">
                <title>Chocolate</title>
                <!-- Compiled and minified CSS -->
                <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet">
            </head>
            <body class="brown lighten-5">
                    <!-- Barra de navegación -->
                <nav class="brown darken-3">
                    <div class="nav-wrapper container">
                        <a href="#" class="brand-logo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmidKKEE5rZhJMOAYpw6TF8bQpJQXptIdP9Q&s" alt="Logo" style="height: 60px;">
                            <a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="3000">Inicio</a></li>
                            <li><a href="#">Menú</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                </nav>
                <br></br>
                <div class="row">
                    <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                        <input placeholder="Placeholder" id="first_name" type="text" class="validate">
                        <label for="first_name">First Name</label>
                        </div>
                        <div class="input-field col s6">
                        <input id="last_name" type="text" class="validate">
                        <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="email" type="email" class="validate">
                        <label for="email">Email</label>
                        </div>
                    </div>
                    </form>
                </div>
            `);
    
    } else {
        response.write(`
            <!DOCTYPE html>
            <head>
                <meta charset="UTF-8">
                <title>Chocolate</title>
                <!-- Compiled and minified CSS -->
                <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet">
            </head>
            <body class="brown lighten-5">
                    <!-- Barra de navegación -->
                <nav class="brown darken-3">
                    <div class="nav-wrapper container">
                        <a href="#" class="brand-logo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmidKKEE5rZhJMOAYpw6TF8bQpJQXptIdP9Q&s" alt="Logo" style="height: 60px;">
                            <a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="3000">Inicio</a></li>
                            <li><a href="#">Menú</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                </nav>
                <div class="container">
                    <h1 class="brown-text text-darken-4">Chocolate</h1>
                    <h2 class="brown-text text-darken-2">Menú:</h2>
                    <table class="striped">
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
                    <a href="/preparar" class="btn brown darken-3" id="boton_preparar">Realizar pedido</a>
                    <button style="display:none" class="btn brown lighten-4" id="boton_chocolate_blanco">Chocolate blanco</button>
                    <button style="display:none" class="btn brown darken-4" id="boton_chocolate_tradicional">Chocolate tradicional</button>
                    <button style="display:none" class="btn orange darken-4" id="boton_chocolate_random">Chocolate aleatorio</button>
                    
                    <br></br>

                    <img width="30%" id="imagen_chocolate"src="" alt=""/>
                    <br></br>
                    <div class="container">
                        <!-- Botón que despliega el cuadro de información -->
                        <a class="waves-effect waves-light btn" id="showInfoButton">Mostrar Información</a>
                    
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
                <!-- Compiled and minified JavaScript -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                <script src="lab7.js"></script>
                </script>
            </body>
            </html>

        `);
    }
    
    response.end();
});
server.listen(3000);