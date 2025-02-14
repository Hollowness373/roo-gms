interface  Guide {
    id: number;
    title: string;
    author: string;
    genre: string;
    rating: number;
    video: string;
    color: string;
    cover: string;
    description: string;
    summary: string;
    isViewed?: boolean;
}

interface AuthCredentials {
    inGameName: string;
    email: string;
    password: string;
    classId: string;
}