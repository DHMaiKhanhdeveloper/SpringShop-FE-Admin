export const insertCategory = (category, navigate) => async (dispatch) => {
  //const serive = new CategoryService()
  try {
    console.log("insert category");
  } catch (error) {
    console.log("Error" + error);
  }
  navigate("/categories/list");
};