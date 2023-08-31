import { Request, Response } from "express";
import { createProject } from "../services";

export const create = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const newProject = await createProject({
      ...body,
    });

    return res.status(201).json({
      message: "successfully created project",
      data: newProject,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
