import express from "express";

const PORT = 4000;

const app = express();
const logger = morgan("dev"); //이거뭔데?
app.use(logger);

const glabalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
glabalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUsesr = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUsesr);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);

app.use("/", glabalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
