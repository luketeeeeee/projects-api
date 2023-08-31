import prisma from "../../prisma";

export const findAllProjects = () => {
  return prisma.project.findMany({});
};
