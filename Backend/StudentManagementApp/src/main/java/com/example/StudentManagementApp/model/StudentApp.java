package com.example.StudentManagementApp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class StudentApp {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer rollno;
  private String name;
  private String city;
  private String email;
  private String course;
  public Integer getRollno() {
	return rollno;
  }
  public void setRollno(Integer rollno) {
	this.rollno = rollno;
  }
  public String getName() {
	return name;
  }
  public void setName(String name) {
	this.name = name;
  }
  public String getCity() {
	return city;
  }
  public void setCity(String city) {
	this.city = city;
  }
  public String getEmail() {
	return email;
  }
  public void setEmail(String email) {
	this.email = email;
  }
  public String getCourse() {
	return course;
  }
  public void setCourse(String course) {
	this.course = course;
  }
  public StudentApp(Integer rollno, String name, String city, String email, String course) {
	super();
	this.rollno = rollno;
	this.name = name;
	this.city = city;
	this.email = email;
	this.course = course;
  }
  public StudentApp() {
	super();
	// TODO Auto-generated constructor stub
  }
  @Override
  public String toString() {
	return "StudentApp [rollno=" + rollno + ", name=" + name + ", city=" + city + ", email=" + email + ", course="
			+ course + "]";
  }
  
}
