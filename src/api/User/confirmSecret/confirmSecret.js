<<<<<<< HEAD
import { prisma } from "../../../../generated/prisma-client";
=======
import { prisma } from "../../../../generated/prisma-client"
>>>>>>> master
import { generateToken } from "../../../utils";

export default {
    Mutation: {
        confirmSecret: async(_, args) => {
<<<<<<< HEAD
            const { email, secret } = args;
            const user = await prisma.user({ email });
            if(user.loginSecret === secret) {
                await prisma.updateUser({
                where: {id: user.id},
                data: {
                    loginSecret: ""
                }
                });
                return generateToken(user.id);
            } else {
                throw Error("Worng email/secret combination 😂");
=======
            const {email, secret} = args;
            const user = await prisma.user({ email });
            if(user.loginSecret === secret) {
                await prisma.updateUser({
                    where: {id: user.id},
                    data: {
                    loginSecret: ""
                }
            });
                return generateToken(user.id);
            } else {
                throw Error("Wrong email/secret combination");
>>>>>>> master
            }
        }
    }
};