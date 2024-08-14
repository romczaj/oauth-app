package pl.romczaj.oauth.resource.api;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class ApplicationController {

    @GetMapping("/not-protected-api/message")
    public Message notProtectedEndpoint() {
        return new Message("Ok");
    }

    @GetMapping("/api/message")
    public Message protectedEndpoint() {
        return new Message("Ok");
    }

    public record Message(String message){}
}