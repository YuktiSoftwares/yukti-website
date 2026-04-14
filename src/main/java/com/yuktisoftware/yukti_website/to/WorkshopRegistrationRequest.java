package com.yuktisoftware.yukti_website.to;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class WorkshopRegistrationRequest {
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
}