module.exports = mongoose => {
    const articulos = mongoose.model(
      "articulos",
      mongoose.Schema(
        {
          nombre: String,
          descripcion: String,
          precio: Number,
          color: String,
          tallas: Array,
          imagenes: Array,
          id_imagen: Number,
          cantidad: Number,
          categoria: String,
          sub_categoria: String
        },
        { timestamps: true }
      ), "articulos"
    );
  
    return articulos;
  };