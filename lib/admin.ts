import {auth} from "@clerk/nextjs"

const adminIds = [
    "user_2eiF0V1znN5dnbtVDOxdPSyH9LD",
]

export const isAdmin = () => {
    const { userId } = auth();

    if(!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1
}