package com.project.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.ProjectModel;

public interface ProjectDAO extends JpaRepository<ProjectModel,String>{

}
