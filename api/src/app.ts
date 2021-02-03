import express from "express";
import morgan from "morgan"; // Muestra peticiones en consola
import cors from "cors";
import videoRoutes from "./routes/videos.routes";

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json()); // Para q entienda los objetos JSON
app.use(express.urlencoded({ extended: false })); // Para q pueda entender cuando viene un post desde un formulario
app.use(videoRoutes);

export default app;
