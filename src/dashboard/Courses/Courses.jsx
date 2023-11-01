import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { firestore } from "../../Configure/Firebase";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import Navbar from "../../components/Sidebar/Navbar";

const initialState = {
  courseName: "",
  batchNo: "",
};

const Courses = () => {
  const [documents, setDocuments] = useState([]);
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [courseForEdit, setCourseForEdit] = useState({});

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setCourseForEdit({ ...courseForEdit, [e.target.name]: e.target.value });
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
      await setDoc(doc(firestore, "courses", uniqueId), {
        courseId: uniqueId,
        courseName: state.courseName,
        batchNo: state.batchNo,
      });

      window.toastify("Course Stored Successfully !!", "success");

      const querySnapshot = await getDocs(collection(firestore, "courses"));
      let updatedData = [];
      querySnapshot.forEach((doc) => {
        updatedData.push(doc.data());
      });
      setDocuments(updatedData);

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

  const editHandle = (cor) => {
    setCourseForEdit(cor);
  };

  const handleUpdate = async (cor) => {
    setIsUpdating(true);
    let newCourses = documents.map((oldCourse) => {
      if (oldCourse.courseId === cor.courseId) {
        return cor;
      } else {
        return oldCourse;
      }
    });
    try {
      await updateDoc(doc(firestore, "courses", cor.courseId), {
        courseName: courseForEdit.courseName,
        batchNo: courseForEdit.batchNo,
      });
      window.toastify(`Document updated.`, "success");
      setDocuments(newCourses);
    } catch (e) {
      window.toastify(`Error adding document: ${e.message}`, "error");
    }
    setIsUpdating(false);
    setCourseForEdit({});
  };

  const deleteHandle = async (cor) => {
    setIsDeleting(true);
    let newCourses = documents.filter((newCourse) => {
      return cor.courseId !== newCourse.courseId;
    });
    try {
      await deleteDoc(doc(firestore, "courses", cor.courseId));
      window.toastify("User Deleted Successfully !!", "success");
      setDocuments(newCourses);
    } catch (error) {
      window.toastify(error.message, "error");
    }
    setIsDeleting(false);
  };

  return (
    <div className="d-flex">
      <Navbar />

      <div className="col-10">
        <div className="col-12 bg-secondary-subtle px-2 d-flex justify-content-between ">
          <h1 className=".text-gradient">Courses</h1>

          {/* ADD COURSES. */}
          <div>
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ height: "55px", paddingTop: "5px" }}
            >
              Add Courses
            </button>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 " id="exampleModalLabel">
                      Add Courses
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="modal-body">
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

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
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

        {/* READ DATA  */}
        <div className="container">
          <h1 className="text-center">Courses</h1>
          <hr />

          {documents.length > 0 ? (
            <div>
              <Table>
                <Thead>
                  <Tr>
                    <Th scope="col">Sr. No</Th>
                    <Th scope="col">Course ID</Th>
                    <Th scope="col">Course Name</Th>
                    <Th scope="col">Batch No</Th>
                    <Th scope="col">Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {documents.map((cor, i) => {
                    return (
                      <Tr key={cor.courseId}>
                        <Th scope="row">{i + 1}</Th>
                        <Td>{cor.courseId}</Td>
                        <Td>{cor.courseName}</Td>
                        <Td>{cor.batchNo}</Td>
                        <Td>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary me-1"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => editHandle(cor)}
                          >
                            Update
                          </button>

                          <button
                            className="btn btn-sm btn-danger"
                            disabled={isDeleting}
                            onClick={() => deleteHandle(cor)}
                          >
                            {!isDeleting ? (
                              <span>Delete</span>
                            ) : (
                              <div className="spinner spinner-grow spinner-grow-sm"></div>
                            )}
                          </button>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </div>
          ) : (
            <div className="text-center">
              <div className="spinner-border"></div>
            </div>
          )}
        </div>

        {/* UPDATE MODEL. */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Update Course
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="col-12">
                  <label for="inputAddress" className="form-label">
                    Course Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Course Name"
                    required
                    value={courseForEdit.courseName}
                    name="courseName"
                    onChange={handleChange}
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
                    value={courseForEdit.batchNo}
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleUpdate(courseForEdit)}
                >
                  {!isUpdating ? (
                    <span>Save Changes</span>
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
  );
};

export default Courses;
