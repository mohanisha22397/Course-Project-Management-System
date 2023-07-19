package com.project.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.WebAndroidMentorModel;

public interface WebAndroidMentorDAO  extends JpaRepository<WebAndroidMentorModel,String>{  
Optional<WebAndroidMentorModel> findById(String email);

WebAndroidMentorModel findByEmail(String email);
}
