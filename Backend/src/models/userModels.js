const {response, request} = require("express")
const mongoose = require("mongoose")
const userModel ={}

const Schema = mongoose.Schema

const userSchema = new Schema({
    nombre:String,
    email:String,
    password:String
})

const Mymodel = mongoose.model("users",userSchema)

userModel.Guardar = async function (post, callback) {
    try {
        const instancia = new Mymodel();
        instancia.nombre = post.nombre;
        instancia.email = post.email;
        instancia.password = post.password;

        const respuesta = await instancia.save();

        console.log(respuesta);
        return callback({ state: true, mensaje : "Usuario guardado"});
    }catch (error){
        console.log(error);
        return callback({ state: false, mensaje: "Error al almacenar"})
    }
    
}

userModel.Listar = async function(post, callback) {
    try {
        const respuesta = await Mymodel.find({}, {password: 0, __v: 0});

        return callback({ state:true, respuesta})
    }catch (error) {
        console.log(error);
        return callback({ state:false, error: error, datos: []});
    }
};

userModel.ListarID = async function (post, callback) {
    try {
       const respuesta = await Mymodel.find({_id:post._id},{password: 0, __v: 0});

       return callback({ state: true, respuesta})
    }catch (error) {
        console.log(error);
        return callback({ state: false, error: error, datos:[]})
    }
    
};