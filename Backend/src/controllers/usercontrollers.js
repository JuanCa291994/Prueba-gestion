const userModel = require ("../models/userModels").userModel
const userController = {}
const bcrypt = require("bcrypt")


userController.Guardar = async function (request,response) {
    const post = {
        nombre:request.body.nombre,
        email:request.body.email,
        password:request.body.password,
        rol:request.body.rol

    };

    if(!post.nombre){
        return response.json({state: false, mensaje:"El campo nombre es obligatorio"});
    }

    if (post.nombre.length >= 30){
        return response.json({state:false, mensaje:"El campo nombre es de máximo 30 caracteres"});
    }

    if(post.nombre.length < 1){
        return response.json({state:false, mensaje:"El campo nombre debe de tener al menos 1 caracter"})
    }

    if (!post.email) {
        return response.json({state:false, mensaje:"El campo email es obligatorio"})
    }

    if (!post.password){
        return response.jsom({state:false, mensaje:"El campo contraseña es obligatorio"})
    }

    const regex = /^(?=.*[A-Z])(?=(.*\d){2,}).{6,}$/; 

    if (!regex.test(post.password)){
        return response.json({
            state:false,
            mensaje:"La contraseña debe contener mínimo 2 números, una mayúscula y tener al menos 7 caracteres",
        })
    }

    try{
        const verif = await new Promise((resolve, reject)=>{
            userModel.VerificarEmail(post, (result) => {
                resolve(result);
            })
        });
        if (verif.continuar !== "Si"){
            return response.json({ state:false, mensaje:"Este email ya existe en la base de datos"})
        }

        const saltRounds = 10;
        post.password = await bcrypt.hash(post.password, saltRounds);

        const respuesta = await new Promise((resolve, reject)=>{
            userModel.Guardar(post, (result)=>{
                resolve(result);
            })
        })
        return response.json(respuesta);

    }catch(error){
        console.error(error);
        return response.json({ state:false, mensaje:"Ocurrio un error al procesar la solicitud"})
    }
    
}