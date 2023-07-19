package com.project.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class FeesModel {
@Id
int id;
String firstname;
String lastname;
String selectedmodule;
String phoneno;
String date;
String accno;
String paymentmode;
String fees;
public FeesModel() {

}
public FeesModel(int id, String firstname, String lastname, String selectedmodule, String phoneno, String date,
		String accno, String paymentmode, String fees) {
	super();
	this.id = id;
	this.firstname = firstname;
	this.lastname = lastname;
	this.selectedmodule = selectedmodule;
	this.phoneno = phoneno;
	this.date = date;
	this.accno = accno;
	this.paymentmode = paymentmode;
	this.fees = fees;
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
public String getFees() {
	return fees;
}
public void setFees(String fees) {
	this.fees = fees;
}




}