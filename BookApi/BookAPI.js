import { getData } from "./API_Helper";
import * as config from './APIConfig';

export const getBooks = async (bookName) => {
    const endPoint = config.get_books_by_name_endpoint + bookName + config.key_header
    return await getData(config.google_books_url, endPoint);
};