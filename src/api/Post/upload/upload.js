import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        upload: async(_, args, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const { user } = request;
<<<<<<< HEAD
            const { caption, files } = args;
            const post = await prisma.createPost({
                caption, 
=======
            const { caption, location, files } = args;
            const post = await prisma.createPost({
                caption,
                location,
>>>>>>> master
                creator: {connect: { id: user.id }} 
            });
            files.forEach( 
                async file => 
<<<<<<< HEAD
                await prisma.createFile({
                    url:file,
                    post: {
                        connect: {
                            id: post.id
                        }
                    }
                })
            );
=======
                    await prisma.createFile({
                        url: file,
                        post: {
                            connect: {
                                id: post.id
                            }
                        }
                    })
             );
>>>>>>> master
            return post;
        }
    }
};