const productos = [
  {
    title : 'BUZO PROJECT ROCK',
    price : 11989,
    image : '1.jpg',
    description: 'El equipo de entrenamiento de Project Rock se creó para ayudarte a superar tus límites.',
    stock: 15,
    id: 1
  },
  {
    title : 'BUZO STORM DAYTONA',
    price : 25899,
    image : '2.jpg',
    description: 'Esta es la única capa que no tienes que seguir quitándote y poniéndote todo el día.',
    stock: 5,
    id: 2
  },
  {
    title : 'BUZO CAMDEN FLEECE',
    price : 29299,
    image : '3.jpg',
    description: 'Con una tela suave, cómoda y acogedora te presentamos la campera Camden.',
    stock: 0,
    id: 3
  },
];

const item = {
  title : 'BUZO PROJECT ROCK',
  price : 11989,
  image : '1.jpg',
  description: 'El equipo de entrenamiento de Project Rock se creó para ayudarte a superar tus límites.',
  stock: 15,
  id: 1
};

export const getProducts = () => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 2000)
  })
};

export const getItem = () => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(item)
    }, 2000)
  })
};

