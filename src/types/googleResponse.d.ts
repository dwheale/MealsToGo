interface IResultPhoto {
  height?: number;
  html_attributes?: string[];
  photo_reference?: string;
  width?: number;
}

interface IRestaurantServiceResult {
  business_status?: string;
  geometry?: {
    location?: {
      lat: number;
      lng: number;
    };
  };
  viewport?: {
    northeast?: {
      lat?: number;
      lng?: number;
    };
    southwest?: {
      lat?: number;
      lng?: number;
    };
  };
  icon?: string;
  name?: string;
  opening_hours?: {
    open_now?: boolean;
  };
  photos?: IResultPhoto[];
  place_id?: string;
  plus_code?: {
    compound_code?: string;
    global_code?: string;
  };
  rating?: number;
  reference?: string;
  scope?: string;
  types?: string[];
  user_ratings_total?: number;
  vicinity?: string;
}

export interface IRestaurantServiceResponse {
  html_attributes?: unknown[];
  next_page_token?: string;
  results?: IRestaurantServiceResult[];
  status?: string;
}
