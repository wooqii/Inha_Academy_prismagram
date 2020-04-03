export const USER_FRAGMENT = `
fragment UserParts of User{}
    id
    username
    email
    firstName
    lastName
    bio
    posts {
        id
        caption
    }
}
`;