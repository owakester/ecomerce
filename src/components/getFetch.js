let product = {
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
};

export const getFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve(product.find((prod) => prod.id === id));
      } else {
        resolve(product);
      }
    }, 2000);
  });
};
