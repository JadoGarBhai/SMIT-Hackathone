import React, { useState, useEffect } from "react";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { firestore } from "../../Configure/firebase";
import { Link } from "react-router-dom";
import SideBar from "../../Components/Sidebar/SideBar";

const Students = () => {
  const [documents, setDocuments] = useState([]);

  const readData = async () => {
    let array = [];
    const querySnapshot = await getDocs(collection(firestore, "students"));
    querySnapshot.forEach((doc) => {
      array.push(doc.data());
    });
    setDocuments(array);
  };

  const deleteHandle = async (studentId, i) => {
    try {
      await deleteDoc(doc(firestore, "students", studentId));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
    let newDocument = documents.filter((doc) => {
      return doc.id !== i;
    });

    setDocuments(newDocument);
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
                  <h1 className="text-white text-center">Students</h1>
                  <hr />
                  {documents.length > 0 ? (
                    <div className="table-responsive">
                      <table className="table table-light table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">CNIC</th>
                            <th scope="col">City</th>
                            <th scope="col">Course</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {documents.map((stu, i) => {
                            return (
                              <tr key={stu.studentId}>
                                <th scope="row">{i + 1}</th>
                                <td>{stu.fullName}</td>
                                <td>{stu.cnic}</td>
                                <td>{stu.city}</td>
                                <td>{stu.courses}</td>
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
                                    onClick={() =>
                                      deleteHandle(stu.studentId, i)
                                    }
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
                      <div className="spinner-border text-white"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Students;
