package com.example.StudentManagementApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.StudentManagementApp.model.StudentApp;


@Repository
public interface StudentRepository extends JpaRepository<StudentApp, Integer> {

}
