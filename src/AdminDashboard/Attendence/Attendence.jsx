import React, { useState, useEffect } from "react";
import SideBar from "../../Components/Sidebar/SideBar";
import { firestore } from "../../Configure/firebase";
import { getDocs, collection } from "firebase/firestore";

const Attendence = () => {
  const [documents, setDocuments] = useState([]);

  const readData = async () => {
    let array = [];
    const querySnapshot = await getDocs(collection(firestore, "students"));
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
          <h1 className=".text-gradient ">Attendence</h1>;
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
                            <th scope="col">Course and Batch</th>
                            <th scope="col">Attendence</th>
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
                                  <select
                                    className="form-select px-1"
                                    name="attandence"
                                    required
                                    // value={state.courses}
                                    // onChange={changeHandler}
                                  >
                                    <option>Present</option>
                                    <option>Absent</option>
                                  </select>
                                </td>
                                <td>
                                  <div className="btn btn-info me-1">
                                    Submit
                                  </div>
                                  <div className="btn btn-success">Update</div>
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
      </div>
    </div>
  );
};

export default Attendence;
