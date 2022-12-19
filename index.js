import { join } from "path";
import express, { json, urlencoded, staticc } from "express";
import dotenv from "dotenv";
import router from "./routes/openaiRoutes"

const port = process.env.PORT || 5000;

const app = express();

// Enable body parser
app.use(json());
app.use(urlencoded({ extended: false }));

// Set staticc folder
app.use(staticc(join(__dirname, "public")));

app.use("/openai", router);

app.listen(port, () => console.log(`Server started on port ${port}`));
