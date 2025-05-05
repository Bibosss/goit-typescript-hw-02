import { useEffect, useState } from "react";
import "./App.css";
import { fetchArticles, type Photo } from "./images-api";
import SearchBar from "./components/SearchBar/SearchBar";
import { Loader } from "./components/Loader/Loader";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [articles, setArticles] = useState<Photo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  useEffect(() => {
    if (!query.trim()) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchArticles(query, page);
        setArticles((prev) => [...prev, ...data.results]);
        setTotalResults(data.total);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (newQuery: string) => {
    setQuery(newQuery);
    setArticles([]);
    setPage(1);
    setTotalResults(0);
  };

  const modalImage = (image: Photo) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSetQuery} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery items={articles} modalImage={modalImage} />
      {articles.length > 0 && articles.length < totalResults && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}

      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default App;
