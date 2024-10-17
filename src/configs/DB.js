
import mongoose from 'mongoose';

export default async function conectDB(){
    try{
        await mongoose.connect(`mongodb+srv://${process.env.DB_URI}`);
        console.log(`Conectado ao atlas!`);
    }catch(erro){
        console.log(erro);
    };
};