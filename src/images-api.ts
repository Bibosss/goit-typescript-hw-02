import axios from "axios";
const ACCESS_KEY = "5TItZtCOPqnzkRnUYlS-8mcWm7eoknUCVX8_Tx26QS8";

export interface Photo {
  id: string;
  alt_description: string | null;
  urls: {
    regular: string;
    small: string;
  };
}

interface PhotoResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}

export interface ImageCardProps {
  url: string;
  alt: string;
  onClick: () => void;
}

export interface ImageGalleryProps {
  items: Photo[];
  modalImage: (item: Photo) => void;
}

export const fetchArticles = async (
  query: string,
  page: number
): Promise<PhotoResponse> => {
  const response = await axios.get<PhotoResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query: query,
        client_id: ACCESS_KEY,
        per_page: 10,
        page: page,
      },
    }
  );
  return response.data;
};
