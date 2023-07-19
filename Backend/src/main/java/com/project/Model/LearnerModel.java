package com.project.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class LearnerModel {
@Id
int id;
String firstname;
String lastname;
String selectedmodule;
String gender;
String dob;
String location;
String mobileno;
String email;
String password;

public LearnerModel() {

}

public LearnerModel(int id, String firstname, String lastname, String selectedmodule, String gender, String dob,
		String location, String mobileno, String email, String password) {
	super();
	this.id = id;
	this.firstname = firstname;
	this.lastname = lastname;
	this.selectedmodule = selectedmodule;
	this.gender = gender;
	this.dob = dob;
	this.location = location;
	this.mobileno = mobileno;
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

public String getSelectedmodule() {
	return selectedmodule;
}

public void setSelectedmodule(String selectedmodule) {
	this.selectedmodule = selectedmodule;
}

public String getGender() {
	return gender;
}

public void setGender(String gender) {
	this.gender = gender;
}

public String getDob() {
	return dob;
}

public void setDob(String dob) {
	this.dob = dob;
}

public String getLocation() {
	return location;
}

public void setLocation(String location) {
	this.location = location;
}

public String getMobileno() {
	return mobileno;
}

public void setMobileno(String mobileno) {
	this.mobileno = mobileno;
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

