package com.project.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class PricingModel {
@Id
int id;
String firstname;
String lastname;
String selectedplan;
String phoneno;
String date;
String accno;
String paymentmode;
String memfees;

public PricingModel() {
	
}

public PricingModel(int id, String firstname, String lastname, String selectedplan, String phoneno, String date,
		String accno, String paymentmode, String memfees) {
	super();
	this.id = id;
	this.firstname = firstname;
	this.lastname = lastname;
	this.selectedplan = selectedplan;
	this.phoneno = phoneno;
	this.date = date;
	this.accno = accno;
	this.paymentmode = paymentmode;
	this.memfees = memfees;
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

public String getSelectedplan() {
	return selectedplan;
}

public void setSelectedplan(String selectedplan) {
	this.selectedplan = selectedplan;
}

public String getPhoneno() {
	return phoneno;
}

public void setPhoneno(String phoneno) {
	this.phoneno = phoneno;
}

public String getDate() {
	return date;
}

public void setDate(String date) {
	this.date = date;
}

public String getAccno() {
	return accno;
}

public void setAccno(String accno) {
	this.accno = accno;
}

public String getPaymentmode() {
	return paymentmode;
}

public void setPaymentmode(String paymentmode) {
	this.paymentmode = paymentmode;
}

public String getMemfees() {
	return memfees;
}

public void setMemfees(String memfees) {
	this.memfees = memfees;
}

}