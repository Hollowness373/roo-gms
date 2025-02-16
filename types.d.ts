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

interface GuideParams {
    title: string;
    author: string;
    classCategory: string;
    coverUrl: string;
    coverColor: string;
    description: string;
    summary: string;
    videoUrl: string;
}