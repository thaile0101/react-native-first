//import {API_URL} from "@env";
const API_URL = "http://188.166.254.220/api/v1";
/**
 * The options used to configure the API.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URL || "https://jsonplaceholder.typicode.com",
  timeout: 10000,
}

export namespace API_STATUS_HEADER {
  export const NOT_FOUND = 404;
  export const UN_PROCESSABLE_ENTITY = 422;
  export const BAD_REQUEST = 400;
  export const NOT_UNAUTHORIZED = 401;
  export const FORBIDDEN = 403;
  export const SUCCESS = 200;
  export const SUCCESS_CREATED = 201;
  export const SUCCESS_NOT_CONTENT = 201;
  export const SERVER_ERROR = 500;
}