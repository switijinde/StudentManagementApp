const API_URL= "http://localhost:8080";

export const getStudents=async () => {
    const response=await fetch(`${API_URL}/students`);
    if(!response.ok){
        throw new Error("Failed to fetch students");
    }

    return response.json();
};

export const addStudent=async (student) =>{
    const response = await fetch(`${API_URL}/addstudent`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(student)
    });

    if(!response.ok){
        throw new Error("Failed to add student");
    }

    return response.json();
};

export const deleteStudent=async (rollno)=>{
    const response=await fetch(`${API_URL}/student/${rollno}`,{
        method:"DELETE"
    });

    if(!response.ok){
        throw new Error("Failed to delete student");
    }

    return response.text();
};

export const updateStudent = async(rollno, student)=>{
    const response = await fetch(`${API_URL}/student/${rollno}`,{
        method: "PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(student)
        });

        if(!response.ok){
            throw new Error("Failed to update student");
        }
        return response.json();
};