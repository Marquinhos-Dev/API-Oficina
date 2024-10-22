
import Vehicle from '../models/vehicleModel.js';

export async function store(req,res){
    try{
        const content = await Vehicle.create(req.body);
        res.status(201).send({criado:content});
    }catch(erro){
        res.status(400).send({erro:erro})
    };
};

export async function index(req,res){
    try{
        const content = await Vehicle.find().exec();
        res.status(201).send(content);
    }catch(erro){
        res.status(400).send({erro:erro})
    };
};

export async function update(req,res){
    try{
        const content = await Vehicle.findByIdAndUpdate(req.params.id,req.body).exec();
        res.status(201).send({atualizado:content});
    }catch(erro){
        res.status(400).send({erro:erro})
    };
};

export async function destroy(req,res){
    try{
        const content = await Vehicle.findByIdAndDelete(req.params.id).exec();
        res.status(201).send({deletado:content});
    }catch(erro){
        res.status(400).send({erro:erro})
    };
};