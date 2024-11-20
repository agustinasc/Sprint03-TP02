import mongoose from 'mongoose';

export async function connectDB(){
    try {
        await mongoose.connect('mongodb+srv://Grupo-13:grupo13@cursadanodejs.ls9ii.mongodb.net/Node-js', {
                //useNewUrlParser: true,
                //useUnifiedTopology: true
            }
        );
        console.log('Conexion exitosa a MongoDB');      
    } catch (error){
        console.error('Error al conectar a MongoDB', error);      
        process.exit(1)
    }
}