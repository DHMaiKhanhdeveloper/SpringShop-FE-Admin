import axios from "axios";
import { API_CATEGORY } from "./constant";
//kết nối client và server
export default class CategoryService {
  insertCategory = async (category) => {
    return await axios.post(API_CATEGORY, category);
  };
}
