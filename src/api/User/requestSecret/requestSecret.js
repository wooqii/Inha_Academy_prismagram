import { prisma } from "../../../../generated/prisma-client"
import { generateSecret, sendSecretMail } from "../../../utils";

export default {
    Mutation:{
<<<<<<< HEAD
        requestSecret: async (_, args, {request}) => {
            const { email } = args;
            const loginSecret = generateSecret();
            console.log(loginSecret)
            try {
                
=======
        requestSecret: async (_, args) => {
            const { email } = args;
            const loginSecret = generateSecret();
            try {
>>>>>>> master
                await sendSecretMail (email, loginSecret);
                await prisma.updateUser({data:{ loginSecret }, where:{ email }});
                return true;
            } catch {
                return false;
            }
        }
    }
<<<<<<< HEAD
};
=======
}
>>>>>>> master
