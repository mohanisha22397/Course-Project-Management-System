package com.project.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class WorkshopModel {
@Id
int id;
String workshop;
public WorkshopModel() {
}
public WorkshopModel(int id, String workshop) {
	super();
	this.id = id;
	this.workshop = workshop;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getWorkshop() {
	return workshop;
}
public void setWorkshop(String workshop) {
	this.workshop = workshop;
}


}
