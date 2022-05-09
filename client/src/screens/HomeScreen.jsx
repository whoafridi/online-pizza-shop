import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filters from "../components/Filters";
import Hero from "../components/Hero";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  // console.log(pizzas);
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
     <Hero/>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error>Error while fetching pizzas {error}</Error>
        ) : (
          <Row>
            <Filters />
            {pizzas.map((pizza) => (
              <Col md={4} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
        
      </Container>

    </>
  );
};

export default HomeScreen;
