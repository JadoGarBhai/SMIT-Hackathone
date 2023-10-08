import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Configure/firebase";
import "./Registration.css";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Registration = () => {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const { email, password, confirmPassword } = state;

    if (confirmPassword !== password) {
      window.toastify("Confirm password wrong", "error");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.toastify("User logged in successfuly!!", "success");
        setIsAuthenticated(true);
        Navigate("/user/dashboard");
      })
      .catch((error) => {
        window.toastify(error.message, "error");
      })
      .finally(() => {
        setState(initialState);
        setIsProcessing(false);
      });
  };

  return <></>;
};

export default Registration;
