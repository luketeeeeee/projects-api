import { Request, Response } from "express";
import { findByProjectName } from "../services";

export const findByName = async (req: Request, res: Response) => {
  try {
    const { projectName } = req.params;

    const project = await findByProjectName(projectName);

    if (!project) {
      return res.status(404).json({
        message: "project not found",
      });
    }

    return res.status(200).json({
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
