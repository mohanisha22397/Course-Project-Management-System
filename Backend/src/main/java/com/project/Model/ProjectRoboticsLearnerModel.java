package com.project.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ProjectRoboticsLearnerModel {
@Id
int id;
String firstname;
String lastname;
String project;
String email;
String password;
public ProjectRoboticsLearnerModel() {

}
public ProjectRoboticsLearnerModel(int id, String firstname, String lastname, String project, String email,
		String password) {
	super();
	this.id = id;
	this.firstname = firstname;
	this.lastname = lastname;
	this.project = project;
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
public String getProject() {
	return project;
}
public void setProject(String project) {
	this.project = project;
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
