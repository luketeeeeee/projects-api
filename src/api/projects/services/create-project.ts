import { Prisma } from "@prisma/client";
import prisma from "../../prisma";

export const createProject = (project: Prisma.ProjectCreateInput) => {
  return prisma.project.create({ data: project });
};
