import React, { createContext, useEffect, useMemo, useState } from 'react';

import { IRestaurant } from '../../features/restaurants/components/RestaurantInfoCard';
import { restaurantRequest } from './RestaurantService';

export const RestaurantsContext = createContext<{
  restaurants: IRestaurant[];
  isLoading: boolean;
  error: Error | null;
  retrieveRestaurants: () => void;
}>({
  restaurants: [],
  isLoading: false,
  error: null,
  retrieveRestaurants: () => {},
});

export const RestaurantsContextProvider: React.FC = ({ children }) => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const retrieveRestaurants = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await restaurantRequest({});
      setRestaurants(response);
    } catch (e) {
      if (e instanceof Error) {
        setError(e);
      } else {
        setError(new Error('Unknown error'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={useMemo(
        () => ({
          restaurants,
          isLoading,
          error,
          retrieveRestaurants,
        }),
        [error, isLoading, restaurants]
      )}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
