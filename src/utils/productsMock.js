const productos = [
  {
    title : 'BUZO PROJECT ROCK',
    price : 11989,
    image : '/1.jpg',
    sumary : 'El equipo de entrenamiento de Project Rock se creó para ayudarte a superar tus límites.',
    description: 'El equipo de entrenamiento de Project Rock se creó para ayudarte a encontrar límites y luego superarlos. Todo en esta colección fue aprobado personalmente por Dwayne Johnson, el trabajador más duro de la sala. Cualquier cuarto. French Terry tiene una capa exterior lisa y una capa interior cálida y suave. El material absorbe el sudor y se seca muy rápido. Bolsillos abiertos para las manos',
    stock: 15,
    size: ['S', 'M', 'L', 'XL', '2XL'],
    color: ['darkslategrey', 'darkblue', 'darkolivegreen'],
    id: 1
  },
  {
    title : 'BUZO STORM DAYTONA',
    price : 25899,
    image : '/2.jpg',
    sumary : 'Esta es la única capa que no tienes que seguir quitándote y poniéndote todo el día.',
    description: 'Se adapta a la temperatura, manteniéndote caliente cuando hace frío, pero dejando salir calor extra a medida que avanza el día. La tecnología UA Storm repele el agua sin sacrificar la transpirabilidad. Aislamiento transpirable combinado con una tela espaciadora suave y liviana para brindar la cantidad justa de calor. Tiene bolsillos abiertos para las manos',
    stock: 5,
    size: ['S', 'M', 'L', 'XL', '2XL'],
    color: ['darkslategrey', 'darkblue', 'darkolivegreen', 'black'],
    id: 2
  },
  {
    title : 'BUZO CAMDEN FLEECE',
    price : 29299,
    image : '/3.jpg',
    sumary : 'Con una tela suave, cómoda y acogedora te presentamos la campera Camden.',
    description: 'El Fleece es un tejido ultra delgado pero muy abrigado, la tecnología antipilling del fleece Northland evitara la formación de pelotitas tras el desgaste habitual en la totalidad de la tela. Los bolsillos con cierres permitirán almacenar hasta tus pertenencias más pequeñas sin riesgos. La Camden Fleece cuenta con ribetes elásticos en puños, éstos poseen la facultad de mantener la prenda en su lugar, y está diseñada con una combinación de tonos en tela de la misma calidad haciendo de ésta una campera bien canchera.',
    stock: 0,
    size: ['S', 'M', 'L', 'XL', '2XL'],
    color: ['darkslategrey', 'darkblue', 'darkolivegreen'],
    id: 3
  },
];

export const getProducts = () => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 2000)
  })
};

export const getItem = (id) => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const product = productFilter(id);
      resolve(product)
    }, 1000)
  })
};

const productFilter = (id) => {
  const prod = productos.find( (p) => {
    return p.id === Number(id);
  })
  return prod;
}
