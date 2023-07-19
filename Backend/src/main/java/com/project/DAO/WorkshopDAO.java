package com.project.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.WorkshopModel;

public interface WorkshopDAO extends JpaRepository<WorkshopModel, String>{

}
