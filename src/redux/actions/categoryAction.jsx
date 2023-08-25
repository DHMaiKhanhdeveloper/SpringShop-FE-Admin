import CategoryService from "../../services/categoryService";

export const insertCategory = (category, navigate) => async (dispatch) => {
  const service = new CategoryService();
  try {
    console.log("insert category");
    //chuyển category đến server
    const response = service.insertCategory(category);
    console.log(response);
  } catch (error) {
    console.log("Error" + error);
  }
  navigate("/categories/list");
};
