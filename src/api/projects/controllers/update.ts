import { Request, Response } from "express";
import { findByProjectName, updateProject } from "../services";

export const update = async (req: Request, res: Response) => {
  try {
    const { projectName } = req.params;
    const body = req.body;

    const projectToUpdate = await findByProjectName(projectName);

    if (!projectToUpdate) {
      return res.status(404).json({
        messsage: "project not found",
      });
    }

    const udpatedProject = await updateProject(projectName, body);

    return res.status(200).json({
      message: "successfully udpated project",
      data: udpatedProject,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
