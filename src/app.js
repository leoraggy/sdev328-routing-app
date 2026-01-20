import express from "express";
import defaultRouter from "./routers/default.routes.js";
import campusesRouter from "./routers/CampusesRouter.js";
//configure Express.js app
const app = express();

//view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

//static directories
app.use(express.static("public"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/campuses", campusesRouter);
app.use("/locations", campusesRouter);

//routers
app.use("/", defaultRouter);

export default app;
