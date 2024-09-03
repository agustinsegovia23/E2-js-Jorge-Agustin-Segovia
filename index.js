///// **************** E2-JS Jorge Agustin Segovia **************** /////




const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 550,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


///////////////////EJERCICIOS A REALIZAR///////////////////// 


// a)  Las pizzas que tengan un id impar.

function pizzasConIdImpar() {
  const impares = pizzas.filter((pizza) => pizza.id % 2 !== 0);
  for (impar in impares) {
    console.log(`Las pizzas con id impar son: ${impares[impar].id}). ${impares[impar].nombre}`);
  }
  
}

pizzasConIdImpar();


// Responder: ¿Hay alguna pizza que valga menos de $600?

function pizzaMenor() {
  const menores = pizzas.filter((pizza) => pizza.precio < 600);
  for(menor of menores){
    console.log(`La pizza que vale menos de $600 es: ${menor.nombre}, su precio es de $${menor.precio}`) ;
  }
}

pizzaMenor();

// c) El nombre de cada pizza con su respectivo precio.

function nombreYPrecioPizzas() {
  const datos = pizzas.map((pizza) => `${pizza.nombre} - $${pizza.precio}`);
  console.log(datos.toString().split(",").join("\n")) ;
}

nombreYPrecioPizzas();


// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

function ingredientesPizzas() {
  for (pizza of pizzas) {
    for (ingrediente of pizza.ingredientes) {
      console.log(`${pizza.nombre} - Ingrediente: ${ingrediente}`);
    }
  }
}

ingredientesPizzas();
