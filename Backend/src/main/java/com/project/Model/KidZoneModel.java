package com.project.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class KidZoneModel {
@Id
int id;
String kidmodule;
public KidZoneModel() {

}
public KidZoneModel(int id, String kidmodule) {
	super();
	this.id = id;
	this.kidmodule = kidmodule;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getKidmodule() {
	return kidmodule;
}
public void setKidmodule(String kidmodule) {
	this.kidmodule = kidmodule;
}



}
