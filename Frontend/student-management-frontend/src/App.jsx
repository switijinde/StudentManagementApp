import {useEffect, useState} from "react";
import {getStudents, deleteStudent, updateStudent} from "./services/studentApi";
import StudentForm from "./components/StudentForm";

function App(){
  const[students, setStudents]=useState([]);
  const[loading,setLoading]=useState(true);
  const [error,setError]=useState("");
  const [editingStudent,setEditingStudent]=useState(null);
  

  const loadStudents=async()=>{
    try{
      setLoading(true);

      const data=await getStudents();

      setStudents(data);
      setError("");
    }
    catch(error){
      setError("Unable to load students");
      console.error(error);
    }
    finally{
      setLoading(false);
    }
  };

  const handleDelete=async(rollno)=>{
    const confirmDelete=window.confirm("Are you sure you want to delete this student?");
    
    if(!confirmDelete){
      return;
    }

    try{
      await deleteStudent(rollno);
      alert("Student deleted successfully!");
      loadStudents();
    }

    catch(error){
      alert("Failed to delete student");
      console.error(error);
    }
  };

  useEffect(()=>{
    loadStudents();
  }, []);

  return(
    <div className="bg-light min-vh-100">
      {/*Header*/}

      <nav className="navbar navbar-dark bg-primary shadow">
          <div className="container">
            <span className="navbar-brand fw-bold fs-4">
               🎓 Student Management System
            </span>
          </div> 
      </nav>
          <div className="container py-4">
            {/*Welcome*/}
            <div className="mb-4">
              <h2 className="fw-bold">Student Dashboard</h2>
              <p className="text-muted">
                  Manage student information easily and efficiently.
              </p>
            </div>

            {/*Statistics card */}
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h6 className="text-muted">TotalStudents</h6>
                    <h2 className="fw-bold text-primary">
                      {students.length}
                    </h2>
                </div>
              </div>
            </div>
          </div>

          {/*Student form*/}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">

              <StudentForm
                 onStudentAdded={loadStudents}
                 editingStudent={editingStudent}
                 onEditComplete={()=>setEditingStudent(null)}
              />
            </div>
          </div>

          {/*Student List*/}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 p-4">
              <h4 className="fw-bold mb-0">
                Student List
              </h4>
            </div>

            <div className="card-body">

               {loading && (
                 <div className="text-center py-4">
                  <p className="mt-2 text-muted">
                     Loading students...
                  </p>
                 </div>
               )}

               {error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
               )}

               {! loading && !error && (
                 <div className="table-responsive">
                   
                    <table className="table table-hover align-middle">

                      <thead className="table-primary">
                        <tr>
                          <th>Roll No</th>
                          <th>Name</th>
                          <th>City</th>
                          <th>Email</th>
                          <th>Course</th>
                          <th>Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {students.map((student)=>(
                          <tr key={student.rollno}>
                             
                             <td className="fw-semibold">
                                {student.rollno}
                             </td>

                             <td>
                                {student.name}
                             </td>

                             <td>
                                {student.city}
                             </td>

                             <td>
                                {student.email}
                             </td>
                           
                             <td>
                                <span className="badge bg-primary">
                                  {student.course}
                                </span>
                             </td>

                             <td>

                              <button
                                 type="button"
                                 className="btn btn-sm btn-outline-primary me-2"
                                 onClick={()=>setEditingStudent(student)}
                              >
                                 Edit
                              </button>

                              <button
                                 type="button"
                                 className="btn btn-sm btn-outline-danger"
                                 onClick={()=>handleDelete(student.rollno)}
                              >
                                 Delete
                              </button>
                             </td>
                          </tr>
                        ))}

                      </tbody>

                    </table>
                
                 </div>
               )}
            </div>
          </div>

        </div>    
    </div>
  );
}
export default App;