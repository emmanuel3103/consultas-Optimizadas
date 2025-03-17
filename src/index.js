const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Connected a MongoDB');
    
    const db = client.db('consultas');
    const usuarios = db.collection('usuarios');
    
    // const temp = [];
    // for (let i = 0; i < 50000; i++) {
    //     temp.push({
    //         name: `User${i}`,
    //         email: `user${i}@gmail.com`,
    //         password: 'password123', 
    //         role: ['admin', 'user', 'invitado'][Math.floor(Math.random() * 3)],
    //         createdAt: new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1)
    //     });
    // }

    // await usuarios.insertMany(temp);

    // Obtener usuarios con rol "admin"
    // const res = await usuarios.find({ role: "admin" }).explain("executionStats");
    // console.log(res.executionStats);

    // Buscar usuarios por nombre (sin índice de texto)
    // const res2 = await usuarios.find({ $text: { $search: "User0" } }).explain("executionStats");
    // console.log(res2.executionStats);

    // Obtener usuarios creados entre 2025-01-01 y 2025-01-05
    // const res3 = await usuarios.find({
    //     createdAt: {
    //         $gte: new Date(2025, 0, 1),  // Meses en JS van de 0 a 11
    //         $lt: new Date(2025, 0, 5)
    //     }
    // }).explain("executionStats");
    // console.log(res3.executionStats);

    //CREANDO ÍNDICES

    // Crear índice en `role`
    // await usuarios.createIndex({ role: 1 });
    // console.log("Índice creado en role");

    // Crear índice de texto en `name`
    // await usuarios.createIndex({ name: "text" });
    // console.log("Índice creado en name");

    // Crear índice en `createdAt`
    // await usuarios.createIndex({ createdAt: 1 });
    // console.log("Índice creado en createdAt");

    //EJECUTANDO QUERIES DESPUÉS DE CREAR ÍNDICES

    //Obtener usuarios con rol "admin"
    // const resDespues = await usuarios.find({ role: "admin" }).explain("executionStats");
    // console.log(resDespues.executionStats);

    //Buscar usuarios por nombre (con índice de texto)
    // const res2Despues = await usuarios.find({ $text: { $search: "user0" } }).explain("executionStats");
    // console.log(res2Despues.executionStats);

    //Obtener usuarios creados entre 2025-01-01 y 2025-01-05
    // const res3After = await usuarios.find({
    //     createdAt: {
    //         $gte: new Date(2025, 0, 1),
    //         $lt: new Date(2025, 0, 5)
    //     }
    // }).explain("executionStats");
    // console.log(res3After.executionStats);


  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

run().catch(console.error);