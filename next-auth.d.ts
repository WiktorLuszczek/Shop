declare module 'next-auth' {
    interface Session {
        user: {
            email: string,
            id: string
        }
    }
    interface User {
        email: string,
        id: string
    }
}