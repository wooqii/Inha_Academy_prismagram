import { prisma } from "../../../../generated/prisma-client"

export default {
    Mutation: {
        createAccount: async(_, args, {request}) => {
<<<<<<< HEAD
            console.log(prisma);
=======
            console.log(prisma)
>>>>>>> master
            const { username, email, firstName = "", lastName = "", bio = ""} = args;
            const user = await prisma.createUser({
                username, 
                email, 
                firstName, 
                lastName, 
                bio 
            });
            return user;
        }
    }
<<<<<<< HEAD
};
=======
}
>>>>>>> master
