import { UserManager } from 'oidc-client';

const settings = {
    authority: "http://localhost:8081/realms/i113_realm/",
    client_id: "vue3-panda-client",
    redirect_uri: "http://localhost:8082/",
    response_type: 'code',
    scope: "openid profile message.read",
};

const userManager = new UserManager(settings);

export const getUser = () => {
    return userManager.getUser();
}

export const login = () => {
    return userManager.signinRedirect(); //redirect user to keycloak
}

export const logout = () => {
    return userManager.signoutRedirect();
}

