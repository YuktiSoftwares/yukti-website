// java
package com.yuktisoftware.yukti_website;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SpaForwardController {

    // Forward requests without a file extension to index.html (SPA entry)
    @GetMapping({"/{path:[^\\.]*}", "/**/{path:[^\\.]*}"})
    public String forwardSpa() {
        return "forward:/index.html";
    }
}
