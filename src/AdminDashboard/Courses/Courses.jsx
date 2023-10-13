import React, { useState } from "react";
import { firestore } from "../../Configure/firebase";
import { doc, setDoc } from "firebase/firestore";
import SideBar from "../../Components/Sidebar/SideBar";

const initialState = {
  courseName: "",
  batchNo: "",
};

const Courses = () => {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  function randomId() {
    const min = 0;
    const max = 999999;
    const randomID = Math.floor(Math.random() * (max - min + 1)) + min;
    return String(randomID).padStart(6, "0");
  }

  const uniqueId = randomId();

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Create a new document in Firestore with a unique ID
      await setDoc(doc(firestore, "courses", uniqueId), {
        courseId: uniqueId,
        courseName: state.courseName,
        batchNo: state.batchNo,
      });

      window.toastify("Course Stored Successfully !!", "success");

      setState(initialState);
    } catch (error) {
      window.toastify(error.message, "error");
    }
    setIsProcessing(false);
  };

  return (
    <div className="d-flex">
      <SideBar />

      <div className="col-10">
        <div className="col-12 bg-secondary-subtle px-2 d-flex justify-content-between ">
          <h1 className=".text-gradient">Courses</h1>

          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Courses
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 " id="exampleModalLabel">
                    Add Courses
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div class="modal-body">
                  <div className="col-12">
                    <label for="inputAddress" className="form-label">
                      Course Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Course Name"
                      required
                      value={state.courseName}
                      name="courseName"
                      onChange={changeHandler}
                    />
                  </div>

                  <div className="col-12">
                    <label for="inputAddress" className="form-label">
                      Batch No
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Batch No"
                      name="batchNo"
                      value={state.batchNo}
                      required
                      onChange={changeHandler}
                    />
                  </div>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary "
                    disabled={isProcessing}
                    onClick={submitHandler}
                  >
                    {!isProcessing ? (
                      <span>Add</span>
                    ) : (
                      <div className="spinner spinner-grow spinner-grow-sm"></div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container"></div>
      </div>
    </div>
  );
};

export default Courses;
