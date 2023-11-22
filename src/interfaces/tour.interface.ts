interface ITour{
    name: string;
    durationHours: number;
    ratingAverage: number;
    ratingQuantity: number;
    price: number;
    imageCover: string;
    images: string[];
    createdAt: Date;
    startDate: Date[];
    startLocation: string;
    locations: string[];
    slug: string;
}

// Awesome COXS BAZAR TOUR;

// AWESOME-COXS-BAZAR-TOUR
// TOURS/AWESOME-COXS-BAZAR-TOUR
export { ITour };