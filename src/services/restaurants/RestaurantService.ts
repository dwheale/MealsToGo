import { IRestaurant } from '../../features/restaurants/components/RestaurantInfoCard';
import { IRestaurantServiceResponse } from '../../types/googleResponse';
import { mockImages, mocks } from './mock';

interface IRestaurantRequest {
  location?: string;
}

const transformRestaurantResponse = ({
  results = [],
}: IRestaurantServiceResponse): IRestaurant[] => {
  const transformedResults: IRestaurant[] = [];
  for (const restaurant of results) {
    if (!restaurant.name || !restaurant.vicinity) {
      continue;
    }
    const randomPhoto =
      mockImages[Math.floor(Math.random() * mockImages.length)];
    transformedResults.push({
      name: restaurant.name,
      address: restaurant.vicinity,
      rating: restaurant.rating,
      photos: restaurant.photos?.map(
        (photo) => photo?.photo_reference || randomPhoto
      ),
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      isOpen: !!restaurant.opening_hours?.open_now,
    });
  }
  return transformedResults;
};

export const restaurantRequest = async ({
  location = '37.7749295,-122.4194155',
}: IRestaurantRequest): Promise<IRestaurant[]> => {
  const mock = mocks[location];
  if (mock) {
    // TODO: change this to a real API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(transformRestaurantResponse(mock));
      }, 2000);
    });
  }
  throw new Error('No mock data found');
};

export default restaurantRequest;
