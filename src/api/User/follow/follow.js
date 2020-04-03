import { isAuthenticated } from "../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

<<<<<<< HEAD
=======

>>>>>>> master
export default {
    Mutation: {
        follow: async(_, args,{ request } ) => {
            isAuthenticated(request);
            const { id } = args;
            const { user } = request;
            try {
                await prisma.updateUser({
                    where: { id: user.id }, 
                    data: {
                    following: {
                    connect: {
                            id
                        }
                    }
                }
            });
            return true;
            } catch {
            return false;
            }
        }
    }
}