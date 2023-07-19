package com.project.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.ProjectRoboticsLearnerModel;

public interface ProjectRoboticsLearnerDAO extends JpaRepository<ProjectRoboticsLearnerModel, String> {
Optional<ProjectRoboticsLearnerModel> findById(String email);
ProjectRoboticsLearnerModel findByEmail (String email);
}
