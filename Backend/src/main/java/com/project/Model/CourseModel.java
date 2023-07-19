package com.project.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CourseModel {
@Id
int id;
String course;

public CourseModel() {

}

public CourseModel(int id, String course) {
	super();
	this.id = id;
	this.course = course;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getCourse() {
	return course;
}

public void setCourse(String course) {
	this.course = course;
}



}
