use('mongo_pizzeria');
db.dropDatabase();
use('mongo_pizzeria');
db.createCollection('tienda');
db.createCollection('clientes');

db.tienda.insertMany([
	{
		_id: 'tienda1',
		direccion: 'Padilla 217',
		'c.p.': '08036',
		ciudad: 'Barcelona',
		provincia: 'Barcelona',
		'C.A.': 'Catalunya',
		pedidos: [
			{
				_id: 'pedido1',
				fecha_pedido: '2022/02/01',
				atendido_por: {
					$ref: 'trabajadores',
					$_id: 'trabajador1',
				},
			},
			{
				_id: 'pedido2',
				fecha_pedido: '2021/02/01',
				atendido_por: {
					$ref: 'trabajadores',
					$_id: 'trabajador1',
				},
			},
			{
				_id: 'pedido3',
				fecha_pedido: '2021/02/03',
				atendido_por: {
					$ref: 'trabajadores',
					$_id: 'trabajador1',
				},
			},
		],
		productos: [
			{
				_id: 'producto1',
				producto: 'pizza',
				nombre: 'margarita',
				descripción: 'Pizza simple, tomate y mozzarela',
				precio: '9.75',
			},
			{
				_id: 'producto2',
				producto: 'Hamburguesa',
				nombre: 'Doble cheeseburguer',
				descripción:
					'Hamburguesa doble de carne 180g. c/u, queso cheddar y amor',
				precio: '13.99',
			},
			{
				_id: 'producto3',
				producto: 'pizza',
				nombre: 'cuatro quesos',
				descripción: 'Mucho queso',
				precio: '13.99',
			},
			{
				_id: 'producto4',
				producto: 'Bebida',
				nombre: 'tónica',
				descripción: 'Bebida carbonatada',
				precio: '1.50',
			},
		],

		trabajadores: [
			{
				_id: 'trabajador1',
				Nombre: 'Alberto',
				Apellido: 'Chicote',
				DNI: '45566711A',
				Telefono: '+34611998811',
				Cargo: 'Repartidor',
			},
			{
				_id: 'trabajador2',
				Nombre: 'Paolo',
				Apellido: 'Mancuso',
				DNI: 'X2334455J',
				Telefono: '+34611012234',
				Cargo: 'Cocinero',
			},
		],
	},
]);
db.clientes.insertMany([
	{
		_id: 'cliente1',
		nombre: 'Francisco Robles',
		calle: 'Carrer Provença, 217',
		'c.p.': '08036',
		ciudad: 'Barcelona',
		ultimo_pedido: {
			$ref: 'pedidos',
			$_id: 'pedido1',
		},
		atendido_por: {
			$ref: 'trabajadores',
			$_id: 'trabajador1',
		},
	},
	{
		_id: 'cliente2',
		nombre: 'Samuel L. J.',
		direccion: 'Carrer Sicilia, 327',
		'c.p.': '08013',
		ciudad: 'Barcelona',
		ultimo_pedido: {
			$ref: 'pedidos',
			$_id: 'pedido2',
		},
		atendido_por: {
			$ref: 'trabajadores',
			$_id: 'trabajador1',
		},
	},
	{
		_id: 'cliente3',
		nombre: 'Juanito',
		direccion: 'Carrer Provença, 217',
		'c.p.': '08036',
		ciudad: 'Barcelona',
		ultimo_pedido: {
			$ref: 'pedidos',
			$_id: 'pedido2',
		},
		atendido_por: { $ref: 'trabajadores', $_id: 'trabajador1' },
	},
]);
