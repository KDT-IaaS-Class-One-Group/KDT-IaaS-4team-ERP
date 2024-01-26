export interface Review {
  // Define the properties of a review object
  // Example: id: number, title: string, content: string
  reviewIndex: number;
  reviewRating: number;
  reviewTitle: string;
  reviewContent: string;
  reviewImgUrl?: string;
  reviewCreatedAt: Date;
  reviewUpdateAt: Date;
  userId: string;
  prodIndex: number;
  reviewAdminContent?: string;
  hasComment?: boolean;
}
