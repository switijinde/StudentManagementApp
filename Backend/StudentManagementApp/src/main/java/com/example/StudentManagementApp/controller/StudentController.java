package com.example.StudentManagementApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentManagementApp.model.StudentApp;
import com.example.StudentManagementApp.service.StudentService;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {
	@Autowired
    StudentService studentService;
	
	@PostMapping("/addstudent")
	public StudentApp addStudent(@RequestBody StudentApp s) {
		studentService.add(s);
		return s;
	}
	
	@GetMapping("/students")
	public List<StudentApp> getstudents(){
		return studentService.displaystudents();
	}
	
	@GetMapping("/student/{id}")
	public StudentApp getstudents(@PathVariable("id") int rollno){
		return studentService.getonestudent(rollno);
	}
	
	@PutMapping("/student/{id}")
	public StudentApp updateStudent(
			@PathVariable("id") int rollno, 
			@RequestBody StudentApp s) {
		
		return studentService.updateStudent(rollno, s);
	}
	
	@DeleteMapping("/student/{id}")
	public String deleteStudent(@PathVariable("id") int rollno) {
		 return studentService.deleteStudent(rollno);
	}
}
