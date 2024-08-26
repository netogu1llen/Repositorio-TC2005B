//setTimeout recibe como parámetro, una función, y la cantidad de segundos
//que van a pasar antes de que se ejecute la función.

const html_header=`
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
`;
const html_footer=`
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
`;
setTimeout(() => {
    console.log("12 segundos");
}, 12000);
//http es el módulo que contiene todas las funciones de un servidor http
const http = require('http');
const server = http.createServer( (request, response) => {    
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
                        <div class="row">
                        
                            <label for="nombre">Nombre</label>
                            <input id="nombre" name="nombre" class="input" type="text" placeholder="Ernesto Guillen" required>
                            <label for="telefono">Teléfono</label>
                            <input id="telefono" phone="telefono" class="input" type="number" placeholder="442-xxxx-xxxx">
                            </div>
                        </div>           
                    </form>
                </main>

                <div class="input-field col s12">
                    <select>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Chocolae blanco</option>
                    <option value="2">Chocolate tradicional</option>
                    <option value="3">Chocolate pequeño</option>
                    </select>
                    <label>Selecciona</label>
                </div>
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i class="material-icons right">send</i>
                </button>
            ${html_footer}
                `);

    } else if (request.url == "/preparar" && request.method == "POST") 
        {
            response.write(`
            ${html_header}
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
                    </div>
                    </div>
                </div>
                ${html_footer}
                <!-- Compiled and minified JavaScript -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </body>
            </html>

        `);
    }
    
    response.end();
});
server.listen(3000);