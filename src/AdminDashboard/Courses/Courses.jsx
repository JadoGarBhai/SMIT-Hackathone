import React, { useState, useEffect } from "react";
import { firestore } from "../../Configure/firebase";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import SideBar from "../../Components/Sidebar/SideBar";

const initialState = {
  courseName: "",
  batchNo: "",
};

const Courses = () => {
  const [documents, setDocuments] = useState([]);
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

  const readData = async () => {
    let array = [];
    const querySnapshot = await getDocs(collection(firestore, "courses"));
    querySnapshot.forEach((doc) => {
      array.push(doc.data());
    });
    setDocuments(array);
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <div className="d-flex">
      <SideBar />

      <div className="col-10">
        <div className="col-12 bg-secondary-subtle px-2 d-flex justify-content-between ">
          <h1 className=".text-gradient">Courses</h1>

          {/* ADD COURSES. */}
          <div>
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ height: "55px", paddingTop: "5px" }}
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
        </div>

        <div className="container">
          <div className="py-5 w-100">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 className="text-white text-center">Courses</h1>
                  <hr />
                  {documents.length > 0 ? (
                    <div className="table-responsive">
                      <table className="table table-light table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Course ID</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Batch No</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {documents.map((cor, i) => {
                            return (
                              <tr key={cor.courseId}>
                                <th scope="row">{i + 1}</th>
                                <td>{cor.courseId}</td>
                                <td>{cor.courseName}</td>
                                <td>{cor.batchNo}</td>
                                <td>
                                  <button
                                    className="btn btn-sm btn-info me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                  >
                                    Update
                                  </button>

                                  <button
                                    className="btn btn-sm btn-danger"
                                    // onClick={() =>
                                    //   deleteHandle(stu.studentId)
                                    // }
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="spinner-border"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
