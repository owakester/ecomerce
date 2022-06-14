export let product = [
  {
    id: 1,
    name: "Hamburguesa Cheta",
    href: "#",

    price: "650",
    stock: 5,
    categoria: "hamburguesas",
    pictureUrl:
      "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg",
    description:
      "Si vas a comer una hamburguesa, que sea con mucha mayonesa. Acá te mostramos la combinación que nunca falla: cheddar y panceta. No te quedes afuera ",
    ingredientes:
      "COMPLETA / HAMBURGUESA CASERA CON PANCETA, QUESO CHEDDAR, CEBOLLA CARAMELIZADA, LECHUGA, TOMATE Y PEPINOS.",
  },

  {
    id: 2,
    name: "Top Porteña 4 carnes",
    href: "#",

    price: "750",
    stock: 8,
    pictureUrl:
      "https://cdn.pixabay.com/photo/2015/07/30/18/23/burger-868145_960_720.jpg",
    Description:
      "Hamburguesas hay miles, pero ese sabor casero incomparable solo lo vas a lograr con Recepedia. Entrá, conocé nuestras opciones y liberá tu creatividad.",
    ingredientes:
      "Doble Cheddar Doble Panceta / Hamburguesa casera con doble porción de queso cheddar, doble ración de panceta y cebolla caramelizada.",
  },
  {
    id: 3,
    name: "Los Dioses",
    href: "#",

    price: "780",
    stock: 12,
    pictureUrl:
      "https://cdn.pixabay.com/photo/2021/01/19/08/47/sandwich-5930496_1280.jpg",
    Description:
      "tremenda receta de hamburguesas de carne caseras para una noche de viernes ya entrando al fin de semana ",
    ingredientes:
      "Quinoa y Semillas / Hamburguesa de Quinoa y selección de semillas, con queso a elección lechuga y tomates frescos!.",
  },
  {
    id: 4,
    name: "Los Dioses",
    href: "#",

    price: "780",
    stock: 12,
    pictureUrl:
      "https://cdn.pixabay.com/photo/2021/01/19/08/47/sandwich-5930496_1280.jpg",
    Description:
      "tremenda receta de hamburguesas de carne caseras para una noche de viernes ya entrando al fin de semana ",
    ingredientes:
      "Clasica / Hamburguesa casera con lechuga, tomate y pepinos caseros en vinagre.",
  },
];

export const getFetch = ( selectProd ) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
  
      if (selectProd) {
      /*   resolve(product[id].find((prod) => prod.id === selectProd)); */
      resolve( product.find( film => film.id === selectProd))
      } else {
        resolve(product[selectProd]);
      }
    }, 2000);
  });
};
