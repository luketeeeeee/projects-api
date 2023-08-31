import express from "express";
import { ProjectController } from "./controllers";

const router = express.Router();

router.route("/").get(ProjectController.findAll);
router.route("/:projectName").get(ProjectController.findByName);
router.route("/").post(ProjectController.create);
router.route("/:projectName").put(ProjectController.update);
router.route("/:projectName").delete(ProjectController.remove);

export default router;
