import { Prisma } from "@prisma/client";
import prisma from "../../prisma";

export const updateProject = (
  projectName: string,
  project: Prisma.ProjectUpdateInput
) => {
  return prisma.project.update({ where: { name: projectName }, data: project });
};
