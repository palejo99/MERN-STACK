import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

(async () => {
  try {
    const mongooseoptions: ConnectionOptions = {
      useUnifiedTopology: true,

      /*         user: config.MONGO_USER,
        pass: config.MONGO_PASSWORD */
    };
    // Se da la orden de conectarse a la base de datos, en caso de no existir se crea
    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`
    );
    console.log("Database is connected to: ", db.connection.name);
  } catch (e) {
    console.log(e);
  }
})();
