
const mongoose = require('mongoose');

async function conectDB(){
    try{
        await mongoose.connect(`mongodb://localhost:27017/OFICINA`);
        console.log(`Conectado ao mongo! Visualize os dados em "OFICINA".`);
    }catch(erro){
        console.log(erro);
    };
};

conectDB();

module.exports = mongoose;