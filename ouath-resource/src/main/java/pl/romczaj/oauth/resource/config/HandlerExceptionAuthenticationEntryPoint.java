package pl.romczaj.oauth.resource.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class HandlerExceptionAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse httpServletResponse, AuthenticationException ex) {
        log.error("AuthenticationException", ex);
        httpServletResponse.setStatus(401);
    }
}