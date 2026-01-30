export interface Review {
    rating: number;
    review: string;
    service: string;
    createdAt: string;
    user: ReviewUser;
}

export interface ReviewUser {
    _id: string;
    name: string;
}

