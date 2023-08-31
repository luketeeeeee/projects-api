import prisma from "../../prisma";

export const deleteProject = (projectName: string) => {
  return prisma.project.delete({ where: { id: projectName } });
};
