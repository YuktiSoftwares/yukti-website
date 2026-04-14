package com.yuktisoftware.yukti_website.controller;

import com.yuktisoftware.yukti_website.service.WorkshopRegistrationService;
import com.yuktisoftware.yukti_website.to.WorkshopRegistrationRequest;
import com.yuktisoftware.yukti_website.to.WorkshopRegistrationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workshops")
public class WorkshopRegistrationController {

    @Autowired
    private WorkshopRegistrationService service;

    @GetMapping("/registrations")
    public ResponseEntity<List<WorkshopRegistrationResponse>> getAllRegistrations() {
        List<WorkshopRegistrationResponse> responses = service.getAllRegistrations();
        return ResponseEntity.ok(responses);
    }

    @PostMapping("/register")
    public ResponseEntity<WorkshopRegistrationResponse> registerWorkshop(@RequestBody WorkshopRegistrationRequest request) {
        WorkshopRegistrationResponse response = service.registerWorkshop(request);
        return ResponseEntity.ok(response);
    }
}