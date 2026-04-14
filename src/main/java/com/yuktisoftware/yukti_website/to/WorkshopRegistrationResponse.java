package com.yuktisoftware.yukti_website.to;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@Getter
@Setter
@AllArgsConstructor
public class WorkshopRegistrationResponse {
    private String registrationId;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String workshopName;
    private boolean success;
    private LocalDateTime registrationDateTime; // New field
}