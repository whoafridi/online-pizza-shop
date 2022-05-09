import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Error from "../components/Error";

const Register = () => {
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const registerhandler = () => {
    if (password !== confrimPassword) {
      alert("Password do not match");
    } else {
      const user = { name, email, password, confrimPassword };
      dispatch(registerUser(user));
      setConfirmPassword('');
      setEmail('');
      setPassword('');
      setName('');
    }
  };
  return (
    <>
      <Container>
      <h1 className="text-center">Registration </h1>
        {loading && <Loader />}
        <div className="row  d-flex align-items-center justify-content-center">
          <div className="col-md-5 col-sm-12">
          <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control className="rounded-pill"
              type="text"
              placeholder="enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="rounded-pill"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="rounded-pill"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confrim Password</Form.Label>
            <Form.Control className="rounded-pill"
              type="password"
              placeholder="Confirm Password"
              value={confrimPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" className="rounded-pill" onClick={registerhandler}>
            Register
          </Button>
        </Form>
        {success && <Success success="User Register Successfully"/>}
        {error && <Error error="Something went wrong"/>}
          </div>
          <div className="col-md-7">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/online-registration-4489363-3723270.png"
            alt="none"
            style={{ width: "100%" }}
          />
          </div>
        </div>        
      </Container>
    </>
  );
};

export default Register;
