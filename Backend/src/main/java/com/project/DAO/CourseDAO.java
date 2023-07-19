
package com.project.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.CourseModel;

public interface CourseDAO extends JpaRepository<CourseModel,String> {

}
