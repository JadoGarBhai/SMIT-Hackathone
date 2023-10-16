import React, { useState, useEffect } from "react";
import SideBar from "../../Components/Sidebar/SideBar";
import { firestore } from "../../Configure/firebase";
import { getDocs, collection, doc, setDoc } from "firebase/firestore";

const Attendence = () => {
  const [documents, setDocuments] = useState([]);
  const [submittedAttendance, setSubmittedAttendance] = useState([]);

  const changeHandler = (e, studentId) => {
    setDocuments((prevDocuments) => {
      return prevDocuments.map((student) => {
        if (student.studentId === studentId) {
          return { ...student, attendance: e.target.value };
        }
        return student;
      });
    });
  };

  // DATA GET FROM STUDENT SECTION.
  const readData = async () => {
    let array = [];
    const querySnapshot = await getDocs(collection(firestore, "students"));
    querySnapshot.forEach((doc) => {
      array.push({ ...doc.data(), attendance: "Present" });
      setSubmittedAttendance((prevSubmittedAttendance) => [
        ...prevSubmittedAttendance,
        false,
      ]);
    });
    setDocuments(array);
  };

  useEffect(() => {
    readData();
  }, []);

  // ATTENDENCE DATA UPLOADED.
  const submitHandler = async (stu, index) => {
    // Check if the attendance value is defined, and only then proceed
    if (stu.attendance !== undefined) {
      await setDoc(doc(firestore, "attendance", stu.studentId), {
        attendance: stu.attendance,
      });

      // Update the submittedAttendance state for the specific student
      setSubmittedAttendance((prevSubmittedAttendance) => {
        const newSubmittedAttendance = [...prevSubmittedAttendance];
        newSubmittedAttendance[index] = true;
        return newSubmittedAttendance;
      });

      console.log("Done !!");
    } else {
      console.error("Invalid attendance value for student", stu.studentId);
    }
  };

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
                            <th scope="col">Attendenced</th>
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
                                    name="attendance"
                                    required
                                    value={stu.attendance}
                                    onChange={(e) =>
                                      changeHandler(e, stu.studentId)
                                    }
                                    disabled={submittedAttendance[i]}
                                  >
                                    <option value="Present">Present</option>
                                    <option value="Absent">Absent</option>
                                  </select>
                                </td>

                                <td></td>

                                <td>
                                  <div
                                    className="btn btn-info me-1"
                                    onClick={() => {
                                      submitHandler(stu, i);
                                    }}
                                  >
                                    Submit
                                  </div>
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
