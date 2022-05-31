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
    category: 'buzos',
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
    category: 'buzos',
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
    category: 'buzos',
    id: 3
  },
  {
    title : 'PANTALON ESS SLIM PUMA',
    price : 9000,
    image : '/4.jpg',
    sumary : 'Estos pantalones deportivos de inspiración urbana causan sensación.',
    description: 'Confeccionados con tejidos excepcionales, presentan un corte ajustado y con estilo, y son ideales para no dejar de lado la sofisticación en los días de relax.',
    stock: 3,
    size: ['S', 'M', 'L', 'XL', '2XL'],
    color: ['grey','darkslategrey', 'darkblue', 'darkolivegreen'],
    category: 'pantalones',
    id: 4
  },
  {
    title : 'PANTALON NWS ESSENTIAL NIKE',
    price : 12499,
    image : '/5.jpg',
    sumary : 'Pantalones deportivos confeccionados con suave tejido Fleece semicepillado.',
    description: 'Los pantalones de tejido Fleece para mujer Nike Sportswear Essential te ofrecen la calidez que necesitas sin agregar volumen. Tienen puños de tela rib que te permiten lucir tu calzado.',
    stock: 10,
    size: ['S', 'M', 'L', 'XL'],
    color: ['lightgoldenrodyellow', 'darkslategrey', 'darkblue', 'darkolivegreen'],
    category: 'pantalones',
    id: 5
  },
  {
    title : 'REMERA TRAINING WORKOUT ADIDAS',
    price : 13999,
    image : '/6.jpg',
    sumary : 'Sin límites, algo que tú y esta camiseta de entrenamiento de adidas tienen en común.',
    description: 'Fue diseñado específicamente para fomentar la libertad de movimiento sin restricciones, lo cual es clave cuando lo estás dando todo. AEROREADY, que absorbe la humedad, lo mantiene enfocado en la meta del día, no en el calor del edificio. Los paneles de malla aireada debajo de los brazos duplican la comodidad y brindan transpirabilidad y alivio adicionales.',
    stock: 25,
    size: ['S', 'M', 'L', 'XL', '2XL'],
    color: ['black', 'darkslategrey', 'white', 'darkolivegreen'],
    category: 'remeras',
    id: 6
  }
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
      const item = productFilter(id);
      resolve(item)
    }, 1000)
  })
};

const productFilter = (id) => {
  const prod = productos.find( (p) => {
    return p.id === Number(id);
  })
  return prod;
}

export const getItemByCategory = (cat) => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const products = categoryFilter(cat);
      resolve(products)
    }, 1000)
  })
};

const categoryFilter = (cat) => {
  const prod = productos.filter( (p) => {
    return p.category === cat.toLowerCase();
  })
  return prod;
}