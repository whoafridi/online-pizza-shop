import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser} from "../actions/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <Container>
        <h1 className="text-center">Login</h1>
        <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-7 col-sm-12">
        <img
            src="https://www.edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
            style={{ width: "100%" }}
            alt="none"
          />
        </div>

        <div className="col-md-5 col-sm-12">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="rounded-pill"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="rounded-pill"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" onClick={loginHandler} className="rounded-pill">
            Login
          </Button>
        </Form>
        </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
