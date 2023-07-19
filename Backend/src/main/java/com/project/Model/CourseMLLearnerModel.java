package com.project.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CourseMLLearnerModel {
@Id
int id;
String firstname;
String lastname;
String course;
String email;
String password;
public CourseMLLearnerModel() {

}
public CourseMLLearnerModel(int id, String firstname, String lastname, String course, String email, String password) {
	super();
	this.id = id;
	this.firstname = firstname;
	this.lastname = lastname;
	this.course = course;
	this.email = email;
	this.password = password;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getFirstname() {
	return firstname;
}
public void setFirstname(String firstname) {
	this.firstname = firstname;
}
public String getLastname() {
	return lastname;
}
public void setLastname(String lastname) {
	this.lastname = lastname;
}
public String getCourse() {
	return course;
}
public void setCourse(String course) {
	this.course = course;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}



}
