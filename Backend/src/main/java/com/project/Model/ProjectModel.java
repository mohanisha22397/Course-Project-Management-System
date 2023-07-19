package com.project.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ProjectModel {
	@Id
	int id;
	String project;
	
	public ProjectModel() {
	
	}

	public ProjectModel(int id, String project) {
		super();
		this.id = id;
		this.project = project;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}
	
	
	
}
