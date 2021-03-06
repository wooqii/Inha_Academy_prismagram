export const USER_FRAGMENT = `
    id
    username
    avatar
`;

export const COMMENT_FRAGMENT = `
    id
    text
    user {
        ${USER_FRAGMENT}
    }
`;

export const FILE_FRAGMENT = `
    id
    url
`;

export const FULL_POST_FRAGMENT = `
    fragment PostParts on Post{
        id
        location
        caption
        files {
            ${FILE_FRAGMENT}
        }
        comments {
            ${COMMENT_FRAGMENT}
        }
        creator {
            ${USER_FRAGMENT}
        }
    }
`;

// 업데이트 된부분
export const MESSAGE_FRAGMENT = ` 
    id 
    text 
    to {
        ${USER_FRAGMENT}
    }
    from {
        ${USER_FRAGMENT}
    }
`;

export const CHAT_FRAGMENT = `
    fragment ChatParts on Chat {
        id
        participants {
            ${USER_FRAGMENT}
        }
        messages {
            ${MESSAGE_FRAGMENT}
        }
    }
`;