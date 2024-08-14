package pl.romczaj.oauth.resource.config;


import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Collection;
import java.util.List;
import java.util.stream.Stream;

@RequiredArgsConstructor
@Getter
public enum ApplicationRole {
    USER,
    ADMIN
}
