import { Request, Response } from "express";
import { findAllProjects } from "../services";

export const findAll = async (req: Request, res: Response) => {
  try {
    const projects = await findAllProjects();

    return res.status(200).json({
      data: projects,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
