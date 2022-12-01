

use('culdampolla');
db.dropDatabase();
use('culdampolla');

db.createCollection('gafas');
db.createCollection('distribuidores');
db.createCollection('clientes');

db.gafas.insertMany([
    {
    _id: "gafa1",
    marca: "Rayban",
    graduacion_izquierda: "3.00",
    graduacion_derecha: "4.25",
    color_lente: "negra",
    tipo_montura: "acero",
    color_montura: "verde",
    precio: "180.90",
    proveedor: 
    {  $ref: "distribuidores",
      $id:"distribuidor1"},
    pedido_por:{
      $ref:"clientes",
      $id:"cliente1"}
    },
    {
    _id: "gafa2",
    brand: "Prada",
    graduacion_derecha: "2.5",
    graduacion_izquierda: "5",
    color_lente: "negro",
    tipo_montura: "acetato",
    color_montura: "verde",
    precio: "550",
    preveedor:
    { $ref: "distribuidores",
      $id:"distribuidor1"},
    pedido_por:{
       $ref:"clientes",
      $id:"cliente2"
    }
    }])



db.distribuidores.insertMany([

    { _id: "distribuidor1",
      nombre: "Gafapasta S.A",
          calle: "Plaza Iberia",
          numero: "16",
          piso: "3",
          puerta: "1",
          ciudad: "Barcelona",
          cp: "08031",
          pais: "España",
      telefono: "932220000",
      email: "lakersla@gmail.com",
      fax: "931113332",
      nif: "A34323233",
      ultimo_comprador:{
        $ref:"clientes",
        $id: "cliente1"
      },
      ultima_compra:{
        $ref:"gafas",
        $id: "gafa1"
      }},
    { _id: "distribuidor2",
      nombre: "Gafastore",
        calle: "Carrer Sils",
        numero: "113",
        cp: "08040",
        ciudad: "Barcelona",
        pais: "España",
      telefono: "777777779",
      fax: "931113332",
      nif: "A34323233",
      ultimo_comprador:{
        $ref:"clientes",
        $id: "cliente1"
      },
      ultima_compra:{
        $ref:"gafas",
        $id: "gafa1"
      }
    }
  ,
   { 	_id: "distribuidor3",
      nombre: "Casimiro S.L",
        calle: "calle Padilla",
        numero: "194",
        cp: "08013",
        ciudad: "Barcelona",
        pais: "España",
      telefono: "932322202",
      fax: "933933933",
      nif: "321321312",
      ultimo_comprador:{
        $ref:"clientes",
        $id: "cliente1"
      },
      ultima_compra:{
        $ref:"gafas",
        $id: "gafa1"
      }
        }
        ])

db.clientes.insert(
   {
        _id: "cliente1",
        nombre: "Pau Gasol",
          calle: "Plaza Iberia",
          numero: "16",
          piso: "3",
          puerta: "1",
          ciudad: "Barcelona",
          cp: "08031",
          pais: "España",
      telefono: "932220000",
      email: "lakersla@gmail.com",
      fecha: "2022-02-22",
      ultima_compra:{
        $ref:"gafas",
        $id: "gafa1"
      }}
  );