package com.project.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.KidZoneModel;

public interface KidZoneDAO extends JpaRepository<KidZoneModel, String> {

}
