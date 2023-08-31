import { Request, Response } from "express";
import { deleteProject, findByProjectName } from "../services";

export const remove = async (req: Request, res: Response) => {
  try {
    const { projectName } = req.params;

    const projectToDelete = await findByProjectName(projectName);

    if (!projectToDelete) {
      return res.status(404).json({
        message: "project not found",
      });
    }

    await deleteProject(projectName);

    return res.status(204).json({
      message: "successfully deleted project",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
