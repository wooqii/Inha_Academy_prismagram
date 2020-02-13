import {prisma} from '../../../generated/prisma-client';

export default {
  User: {
    fullName: parent => {
      return `${parent.firstName} ${parent.lastName}`;
    },
    isFollowing: async ( parent, _, { request } ) => {
      const {user} = request;
      const {id: parentid} = parent;
      try {
        return prisma.$exists.user ({
          AND: [
            { id: user.id }, { following_some: { id: parentid}
            }
          ]
        });
      } catch (error) {
        return false;
      }
    },
    isSelf: ( parent, _, { request }) => {
      const {user} = request;
      const {id: parentid} = parent;
      return user.id === parentid;
    }
  }
};
