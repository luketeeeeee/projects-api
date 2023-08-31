import prisma from "../../prisma";

export const findByProjectName = (projectName: string) => {
  return prisma.project.findUnique({ where: { name: projectName } });
};
