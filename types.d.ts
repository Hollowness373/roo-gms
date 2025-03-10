interface  Guide {
    id: string;
    title: string;
    author: string;
    classCategory: string;
    videoUrl: string | null;
    coverColor: string;
    coverUrl: string;
    description: string;
    summary: string;
    createdAt: Date | null
}

interface User {
    id: string;
    inGameName: string;
    email: string;
    classId: string;
    userImage: string | null;
    password: string;
    status: "APPROVED" | "REJECTED" | null;
    role: "USER" | "ADMIN" | "LEADER" | "DEV" | null;
    lastActivityDate: string | null;
    createdAt: Date | null;
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

interface AdminUpdateUser {
    inGameName: string;
    classId: string;
    password: string;
}

interface UpdateAvatar {
    userImage: string;
}