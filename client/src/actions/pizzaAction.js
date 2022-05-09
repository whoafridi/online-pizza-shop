import axios from "axios";
import swal from "sweetalert";
export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get("https://pizza-server1.herokuapp.com/api/pizzas/getAllPizzas");
    // console.log(response.data);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: err });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZAS_REQUEST" });
  try {
    await axios.post("https://pizza-server1.herokuapp.com/api/pizzas/addpizza", { pizza });
    dispatch({ type: "ADD_PIZZAS_SUCCESS" });
  } catch (err) {
    dispatch({ type: "ADD_PIZZAS_FAIL", payload: err });
  }
};

export const getPizzaById = (pizzaId) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });
  try {
    const response = await axios.post("https://pizza-server1.herokuapp.com/api/pizzas/getpizzabyid", { pizzaId });
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZABYID_FAIL", payload: err });
  }
};
export const updatePizza = (updatedPizza) => async (dispatch) => {
  dispatch({ type: "UPDATE_PIZZABYID_REQUEST" });
  try {
    const response = await axios.post("https://pizza-server1.herokuapp.com/api/pizzas/updatepizza", {
      updatedPizza,
    });
    dispatch({ type: "UPDATE_PIZZABYID_SUCCESS", payload: response.data });
    window.location.href = "https://pizza-server1.herokuapp.com/admin/pizzalist";
  } catch (err) {
    dispatch({ type: "UPDATE_PIZZABYID_FAIL", payload: err });
  }
};

export const deletePizza = (pizzaId) => async (dispatch) => {
  try {
    await axios.post("https://pizza-server1.herokuapp.com/api/pizzas/deletepizza", { pizzaId });
    swal("Pizza Deleted Succss!", "success");
    window.location.href = "https://pizza-server1.herokuapp.com/admin/pizzalist";
    // console.log(res);
  } catch (error) {
    swal("Errro While Deleteing Pizza");
  }
};

export const filterPizza = (searchkey, category) => async (dispatch) => {
  let filterdPizza;
  let search = searchkey.toLowerCase();
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const res = await axios.get("https://pizza-server1.herokuapp.com/api/pizzas/getAllPizzas");
    filterdPizza = res.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(search)
     
    );
    console.log(filterdPizza)
    if (category !== "all") {
      filterdPizza = res.data.filter(
        (pizza) => pizza.category.toLowerCase() === category
      );
    }
    console.log(filterdPizza)
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filterdPizza });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
  }
};
