import {PassedInitialConfig} from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
            configId: '0-frontend-client',
            authority: 'http://localhost:8080',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId: 'frontend-client',
            scope: 'openid profile offline_access',
            responseType: 'code',
            silentRenew: true,
            silentRenewUrl: 'http://localhost:4200/success',
            renewTimeBeforeTokenExpiresInSeconds: 240,
            secureRoutes: ['http://localhost:8090/api'],
        }
}
