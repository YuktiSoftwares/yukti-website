package com.yuktisoftware.yukti_website.repository;

import com.yuktisoftware.yukti_website.entity.WorkshopRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkshopRegistrationRepository extends JpaRepository<WorkshopRegistration, Long> {
}