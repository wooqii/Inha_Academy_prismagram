import { prisma } from "../../../../generated/prisma-client";
<<<<<<< HEAD
import { COMMENT_FRAGMENT, FULL_POST_FRAGMENT } from "../../../fragments";
=======
import { COMMENT_FRAGMENT, FULL_POST_FRAGMENT } from "../../../fragment";
>>>>>>> master

export default {
  Query: {
    seeFullPost: async (_, args) => {
      const { id } = args;
      return prisma.post({ id }).$fragment(FULL_POST_FRAGMENT);
    }
  }
};