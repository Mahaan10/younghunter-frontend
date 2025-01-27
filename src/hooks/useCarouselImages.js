import { useQuery } from "@tanstack/react-query";
import getCarouselImagesApi from "../services/carouselService";

export default function useCarouselImages() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["carousel-images"],
    queryFn: getCarouselImagesApi,
  });

  const { images } = data || {};
  return { images, isLoading, isError, error };
}
