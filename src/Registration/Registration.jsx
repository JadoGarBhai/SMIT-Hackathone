import React, { useState } from "react";
import { firestore } from "../../Configure/firebase";
import { doc, setDoc } from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./Registration.css";

const initialState = {
  email: "",
  password: "",
  city: "",
  courses: "",
  fullName: "",
  fatherName: "",
  cnic: "",
  dob: "",
  address: "",
  picture: null,
};

const Registration = () => {
  const [state, setState] = useState(initialState);

  const storage = getStorage(); // Firebase storage reference
  const storageRef = ref(storage, "user-profiles");

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      window.toastify("User logged in successfuly!!", "success");
      // Reset the form state
      setState(initialState);
    } catch (error) {
      console.log(error.message);
      window.toastify(error.message, "error");
    }
  };

  return (
    <>
      <header>
        <div className="bgImg col-12">
          <div className="text-center py-5">
            <img
              src="https://forms.saylaniwelfare.com/static/media/logo.22bf709605809177256c.png"
              alt=""
            />
            <h1>Course Registration Form</h1>
          </div>
        </div>
      </header>

      <main>
        <div className="form col-xl-10 col-lg-10 col-md-10 col-sm-12 mx-auto pt-3">
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputState" className="form-label">
                City
              </label>
              <select
                id="inputState"
                className="form-select"
                required
                name="city"
                value={state.city}
                onChange={changeHandler}
              >
                <option selected>City...</option>
                <option>Faisalabad</option>
                <option>Lahore</option>
                <option>Karachi</option>
                <option>Islamabad</option>
              </select>
            </div>
            <div className="col-md-6">
              <label for="inputState" className="form-label">
                Courses
              </label>
              <select
                id="inputState"
                className="form-select"
                required
                name="courses"
                value={state.courses}
                onChange={changeHandler}
              >
                <option selected>Courses...</option>
                <option>Graphics Designer</option>
                <option>Video Animation</option>
                <option>CCNA</option>
                <option>Web & Mobile Application</option>
              </select>
            </div>

            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                required
                name="email"
                onChange={changeHandler}
                value={state.email}
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                name="password"
                required
                value={state.password}
                onChange={changeHandler}
              />
            </div>

            <div className="col-6">
              <label for="inputAddress" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                required
                value={state.fullName}
                name="fullName"
              />
            </div>

            <div className="col-6">
              <label for="inputAddress" className="form-label">
                Father Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Father Name"
                required
                value={state.fatherName}
                name="fatherName"
              />
            </div>

            <div className="col-6">
              <label for="inputAddress" className="form-label">
                CNIC No
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="CNIC No"
                name="cnic"
                value={state.cnic}
                required
              />
            </div>

            <div className="col-6">
              <label for="inputAddress" className="form-label">
                DOB
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="DOB"
                name="dob"
                value={state.dob}
                required
              />
            </div>

            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                name="address"
                value={state.address}
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Upload Picture
              </label>
              <input
                type="file"
                className="form-control"
                placeholder="Picture"
                name="picture"
                onChange={(e) =>
                  setState({ ...state, picture: e.target.files[0] })
                }
                required
              />
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary col-12 my-5 py-2"
                onClick={submitHandler}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Registration;
