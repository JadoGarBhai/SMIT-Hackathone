import React, { useState, useEffect } from "react";
import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../../Configure/firebase";
import { Link } from "react-router-dom";
import SideBar from "../../Components/Sidebar/SideBar";

const Students = () => {
  const [documents, setDocuments] = useState([]);
  const [studentForEdit, setStudentForEdit] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const changeHandler = (e) => {
    setStudentForEdit({ ...studentForEdit, [e.target.name]: e.target.value });
  };

  const readData = async () => {
    let array = [];
    const querySnapshot = await getDocs(collection(firestore, "students"));
    querySnapshot.forEach((doc) => {
      array.push(doc.data());
    });
    setDocuments(array);
  };

  const handleEdit = (stu) => {
    setStudentForEdit(stu);
  };

  const handleUpdate = async (stu) => {
    setIsProcessing(true);
    let newStudents = documents.map((oldStudent) => {
      if (oldStudent.studentId === stu.studentId) {
        return stu;
      } else {
        return oldStudent;
      }
    });
    try {
      await updateDoc(doc(firestore, "students", stu.studentId), {
        email: studentForEdit.email,
        password: studentForEdit.password,
        city: studentForEdit.city,
        courses: studentForEdit.courses,
        fullName: studentForEdit.fullName,
        fatherName: studentForEdit.fatherName,
        cnic: studentForEdit.cnic,
        dob: studentForEdit.dob,
        address: studentForEdit.address,
      });
      window.toastify(`Document updated with Name: ${stu.fullName}`, "success");
      setDocuments(newStudents);
    } catch (e) {
      window.toastify(`Error adding document: ${e.message}`, "error");
    }
    setIsProcessing(false);
    setStudentForEdit({});
  };

  const deleteHandle = async (stu) => {
    setIsProcessing(true);
    let newDocuments = documents.filter((newStudent) => {
      return stu.studentId !== newStudent.studentId;
    });
    try {
      await deleteDoc(doc(firestore, "students", stu.studentId));
      window.toastify("User Deleted Successfully !!", "success");
      setDocuments(newDocuments);
    } catch (error) {
      window.toastify(error.message, "error");
    }
    setIsProcessing(false);
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <div className="d-flex">
      <SideBar />

      <div className="col-10">
        <div className="col-12 bg-secondary-subtle px-2 d-flex justify-content-between ">
          <h1 className=".text-gradient">Students</h1>
          <div
            className="btn btn-secondary"
            style={{ height: "55px", paddingTop: "11px" }}
          >
            <Link to={"/add"} style={{ textDecoration: "none", color: "#fff" }}>
              Add Students
            </Link>
          </div>
        </div>

        <main>
          <div className="py-5 w-100">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 className=" text-center">Students</h1>
                  <hr />
                  {documents.length > 0 ? (
                    <div className="table-responsive">
                      <table className="table table-light table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Student ID</th>
                            <th scope="col">Course</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {documents.map((stu, i) => {
                            return (
                              <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{stu.fullName}</td>
                                <td>{stu.studentId}</td>
                                <td>
                                  {stu.courses}-{stu.batch}
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-info btn-sm me-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => {
                                      handleEdit(stu);
                                    }}
                                  >
                                    Update
                                  </button>

                                  <button
                                    className="btn btn-sm btn-danger"
                                    disabled={isProcessing}
                                    onClick={() => deleteHandle(stu)}
                                  >
                                    {!isProcessing ? (
                                      <span>Delete</span>
                                    ) : (
                                      <div className="spinner spinner-grow spinner-grow-sm"></div>
                                    )}
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
        </main>

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Edit {studentForEdit.fullName}
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="col-md-12">
                  <label for="inputState" className="form-label">
                    City
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    required
                    name="city"
                    value={studentForEdit.city}
                    onChange={changeHandler}
                  >
                    <option selected>City...</option>
                    <option>Faisalabad</option>
                    <option>Lahore</option>
                    <option>Karachi</option>
                    <option>Islamabad</option>
                  </select>
                </div>

                <div className="col-md-12">
                  <label for="inputState" className="form-label">
                    Courses
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    required
                    name="courses"
                    value={studentForEdit.courses}
                    onChange={changeHandler}
                  >
                    <option selected>Courses...</option>
                    <option>Graphics Designer</option>
                    <option>Video Animation</option>
                    <option>CCNA</option>
                    <option>Web & Mobile Application</option>
                  </select>
                </div>

                <div className="col-md-12">
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
                    value={studentForEdit.email}
                  />
                </div>

                <div className="col-md-12">
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
                    value={studentForEdit.password}
                    onChange={changeHandler}
                  />
                </div>

                <div className="col-12">
                  <label for="inputAddress" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    required
                    value={studentForEdit.fullName}
                    name="fullName"
                    onChange={changeHandler}
                  />
                </div>

                <div className="col-12">
                  <label for="inputAddress" className="form-label">
                    Father Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Father Name"
                    required
                    value={studentForEdit.fatherName}
                    name="fatherName"
                    onChange={changeHandler}
                  />
                </div>

                <div className="col-12">
                  <label for="inputAddress" className="form-label">
                    CNIC No
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="CNIC No"
                    name="cnic"
                    value={studentForEdit.cnic}
                    required
                    onChange={changeHandler}
                  />
                </div>

                <div className="col-12">
                  <label for="inputAddress" className="form-label">
                    DOB
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="DOB"
                    name="dob"
                    value={studentForEdit.dob}
                    required
                    onChange={changeHandler}
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
                    value={studentForEdit.address}
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
                  type="button"
                  class="btn btn-primary"
                  disabled={isProcessing}
                  onClick={() => {
                    handleUpdate(studentForEdit);
                  }}
                >
                  {!isProcessing ? (
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

export default Students;
