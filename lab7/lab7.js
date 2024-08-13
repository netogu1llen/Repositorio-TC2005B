const boton_preparar=document.getElementById("boton_preparar");
const boton_blanco= document.getElementById("boton_chocolate_blanco");
const boton_tradicional=document.getElementById("boton_chocolate_tradicional");
const boton_random=document.getElementById("boton_chocolate_random");





const chocolate=[
    {
        descripción:"Chocolate blanco",
        imagen: "https://2.bp.blogspot.com/-C-9DxGZXvso/VYmRI1dM6iI/AAAAAAAAjVc/Sz4QuaM1Mdc/s1600/IMG_9147.JPG",
    },
    {
        descripción:"Chocolate tradicional",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9KUUoiqgJ0zZrB_LgZV7-oBH4IEPYOmj9Vw&s",
    },
    {
        descripción:"Chocolate artesanal",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnxaqa5mcgWR3xoXko8I-1YJQPDwVuS1oUA&s",
    },
]
boton_preparar.onclick=()=>{
    const imagen=document.getElementById("imagen_chocolate");
    imagen.alt="Imagen de vaciado de chocolate";
    imagen.src="https://imgmedia.buenazo.pe/650x358/buenazo/original/2020/08/19/5f3dbfcf10163977e21ab8a2.jpg";
    boton_preparar.style="display:none";
    boton_blanco.style="display:inline";
    boton_tradicional.style="display:inline";
    boton_random.style="display:inline";
};

boton_blanco.onclick=()=>{
    const imagen=document.getElementById("imagen_chocolate");
    imagen.alt=chocolate[0].descripción;
    imagen.src=chocolate[0].imagen;
    boton_chocolate_blanco.style="display:none";
    boton_tradicional.style="display:none";
    boton_random.style="display:none";
};

boton_tradicional.onclick=()=>{
    const imagen=document.getElementById("imagen_chocolate");
    imagen.alt=chocolate[1].descripción;
    imagen.src=chocolate[1].imagen;
    boton_chocolate_blanco.style="display:none";
    boton_tradicional.style="display:none";
    boton_random.style="display:none";
};

boton_random.onclick=()=>{
    const imagen=document.getElementById("imagen_chocolate");
    const num_chocolate=Math.floor(Math.random()*3);
    imagen.alt=chocolate[num_chocolate].descripción;
    imagen.src=chocolate[num_chocolate].imagen;
    boton_chocolate_blanco.style="display:none";
    boton_tradicional.style="display:none";
    boton_random.style="display:none";
}

  
