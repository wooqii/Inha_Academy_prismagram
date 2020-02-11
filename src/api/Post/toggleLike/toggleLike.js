import { isAuthenticated } from "../../../middleware";

export default {
  Mutation: {
    toggleLike: async (_, args, {request}) => {
        isAuthenticated(request);
        const { postId } = args;
        const { user } = request;
        return true;
    }
  }
};