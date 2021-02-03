import { Schema, model } from "mongoose";

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    versionKey: false, // para eliminar comentario típico de mongoose
    timestamps: true,
  }
);

export default model("Video", videoSchema); // esta función recibe dos parámetros el nombre del modelo y nombre del esquema
