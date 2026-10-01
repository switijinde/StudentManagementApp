import { useEffect, useState } from "react";
import { addStudent, updateStudent } from "../services/studentApi";

function StudentForm({
    onStudentAdded,
    editingStudent,
    onEditComplete
}) {
    const [student, setStudent] = useState({
        name: "",
        city: "",
        email: "",
        course: ""
    });

    useEffect(() => {
        if (editingStudent) {
            setStudent({
                name: editingStudent.name,
                city: editingStudent.city,
                email: editingStudent.email,
                course: editingStudent.course
            });
        }
    }, [editingStudent]);

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (editingStudent) {
                await updateStudent(editingStudent.rollno, student);

                alert("Student updated successfully!");

                onEditComplete();
            } else {
                await addStudent(student);

                alert("Student added successfully!");
            }

            setStudent({
                name: "",
                city: "",
                email: "",
                course: ""
            });

            onStudentAdded();
        } catch (error) {
            alert("Failed to save student");
            console.error(error);
        }
    };

    return (
        <div>

            {/* Form Header */}
            <div className="mb-4">
                <h3 className="fw-bold mb-1">
                    {editingStudent ? "Edit Student" : "Add Student"}
                </h3>

                <p className="text-muted mb-0">
                    {editingStudent
                        ? "Update student information"
                        : "Enter student information below"}
                </p>
            </div>

            <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        Student Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter student name"
                        value={student.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* City */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        City
                    </label>

                    <input
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder="Enter city"
                        value={student.city}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        Email Address
                    </label>

                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email address"
                        value={student.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Course */}
                <div className="mb-4">
                    <label className="form-label fw-semibold">
                        Course
                    </label>

                    <input
                        type="text"
                        name="course"
                        className="form-control"
                        placeholder="Enter course"
                        value={student.course}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Buttons */}
                <div className="d-flex gap-2">

                    <button
                        type="submit"
                        className="btn btn-primary px-4"
                    >
                        {editingStudent
                            ? "Update Student"
                            : "Add Student"}
                    </button>

                    {editingStudent && (
                        <button
                            type="button"
                            className="btn btn-outline-secondary px-4"
                            onClick={() => {
                                setStudent({
                                    name: "",
                                    city: "",
                                    email: "",
                                    course: ""
                                });

                                onEditComplete();
                            }}
                        >
                            Cancel
                        </button>
                    )}

                </div>

            </form>

        </div>
    );
}

export default StudentForm;