package com.example.StudentManagementApp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.StudentManagementApp.dao.StudentRepository;
import com.example.StudentManagementApp.model.StudentApp;


@Service
public class StudentService {
   @Autowired
	StudentRepository studentRepository;
   
   //Add Student
    public StudentApp add(StudentApp s) {
    	studentRepository.save(s);
    	return  s;
    }
    
    //Get All Students
    public List<StudentApp> displaystudents(){
    	List<StudentApp> st=studentRepository.findAll();
    	return st;
    }
    
    //Get One Student
    public StudentApp getonestudent(int rollno) {
    	StudentApp s= studentRepository.getById(rollno);
    	return s;
    }
    
    //Update Student
    public StudentApp updateStudent(int rollno,StudentApp updateStudent) {
    	StudentApp existStudent=studentRepository.findById(rollno).orElse(null);
    	
    	if(existStudent != null) {
    		existStudent.setName(updateStudent.getName());
    		existStudent.setEmail(updateStudent.getEmail());
    		existStudent.setCity(updateStudent.getCity());
    		existStudent.setCourse(updateStudent.getCourse());
    		
    		return studentRepository.save(existStudent);
    	}
    	return null;
    }
    
    //Delete Student
    public String deleteStudent(int rollno) {
    	StudentApp student=studentRepository.findById(rollno).orElse(null);
    	
    	if(student != null) {
    		studentRepository.deleteById(rollno);
    		return "Student deleted successfully";
    	}
    	return "Student not found";
    }
}
