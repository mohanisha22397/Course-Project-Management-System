package com.project.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.RoboIOTMentorModel;

public interface RoboIOTMentorDAO extends JpaRepository<RoboIOTMentorModel, String>{
	Optional<RoboIOTMentorModel> findById(String email);

	RoboIOTMentorModel findByEmail(String email);

}
