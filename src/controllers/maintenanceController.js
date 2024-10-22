
import Maintenance from '../models/maintenanceModel.js';

export async function store(req,res){
    try{
        const content = await Maintenance.create(req.body);
        res.status(201).send({criado:content});
    }catch(erro){
        res.status(400).send({erro:erro})
    };
};

export async function index(req,res){
    try{
        const content = await Maintenance.find().exec();
        res.status(201).send(content);
    }catch(erro){
        res.status(400).send({erro:erro})
    };
};

export async function update(req,res){
    try{
        const content = await Maintenance.findByIdAndUpdate(req.params.id,req.body).exec();
        res.status(201).send({atualizado:content});
    }catch(erro){
        res.status(400).send({erro:erro})
    };
};

export async function destroy(req,res){
    try{
        const content = await Maintenance.findByIdAndDelete(req.params.id).exec();
        res.status(201).send({deletado:content});
    }catch(erro){
        res.status(400).send({erro:erro})
    };
};