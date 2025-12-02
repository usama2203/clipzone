import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 8000;
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });
    app.listen(port, () => {
      console.log(` Server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB CONNECTION FAILED !! ", err);
  });

// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT,()=>{
//       console.log(`App is listening on ${process.env.PORT}`);

//     });

//   } catch (error) {
//     console.error("MONGO DB CONNECTION FAILED ", error);
//     throw error;
//   }
// })();
