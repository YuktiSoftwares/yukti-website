package com.yuktisoftware.yukti_website.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Data
@Getter
@Setter
public class WorkshopRegistration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String branch;
    private String semester;
    private String experience;
    private String comments;
    private Long workshopId;
    private String workshopName;

    @Column(unique = true)
    private String registrationId;

    private LocalDateTime registrationDateTime; // New field
}