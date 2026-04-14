package com.yuktisoftware.yukti_website.service;

import com.yuktisoftware.yukti_website.entity.WorkshopRegistration;
import com.yuktisoftware.yukti_website.repository.WorkshopRegistrationRepository;
import com.yuktisoftware.yukti_website.to.WorkshopRegistrationRequest;
import com.yuktisoftware.yukti_website.to.WorkshopRegistrationResponse;
import io.github.resilience4j.ratelimiter.annotation.RateLimiter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class WorkshopRegistrationService {

    @Autowired
    private WorkshopRegistrationRepository repository;

    @RateLimiter(name = "workshopRegistration", fallbackMethod = "rateLimitFallback")
    public WorkshopRegistrationResponse registerWorkshop(WorkshopRegistrationRequest request) {
        WorkshopRegistration registration = new WorkshopRegistration();
        registration.setFirstName(request.getFirstName());
        registration.setLastName(request.getLastName());
        registration.setEmail(request.getEmail());
        registration.setPhoneNumber(request.getPhoneNumber());
        registration.setBranch(request.getBranch());
        registration.setSemester(request.getSemester());
        registration.setExperience(request.getExperience());
        registration.setComments(request.getComments());
        registration.setWorkshopId(request.getWorkshopId());
        registration.setWorkshopName(request.getWorkshopName());
        registration.setRegistrationId("REG" + UUID.randomUUID().toString().replace("-", "").substring(0, 9));
        registration.setRegistrationDateTime(LocalDateTime.now()); // Set current datetime

        repository.save(registration);

        return new WorkshopRegistrationResponse(
                registration.getRegistrationId(),
                registration.getFirstName(),
                registration.getLastName(),
                registration.getEmail(),
                registration.getPhoneNumber(),
                registration.getWorkshopName(),
                true,
                registration.getRegistrationDateTime()
        );
    }

    public List<WorkshopRegistrationResponse> getAllRegistrations() {
        return repository.findAll().stream()
                .map(registration -> new WorkshopRegistrationResponse(
                        registration.getRegistrationId(),
                        registration.getFirstName(),
                        registration.getLastName(),
                        registration.getEmail(),
                        registration.getPhoneNumber(),
                        registration.getWorkshopName(),
                        true,
                        registration.getRegistrationDateTime()
                ))
                .collect(Collectors.toList());
    }
}