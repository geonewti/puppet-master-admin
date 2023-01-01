import { UserAgentApplication } from "msal";

class AzureAdProvider {
    static userAgentApplication: UserAgentApplication = new UserAgentApplication({
        auth: {
            clientId: import.meta.env.VITE_AZURE_AD_CLIENT_ID as string,
            redirectUri: import.meta.env.VITE_AZURE_AD_REDIRECT_URL as string,
            authority: import.meta.env.VITE_AZURE_AD_AUTHORITY as string,
        },
        cache: {
            cacheLocation: "sessionStorage",
            storeAuthStateInCookie: true,
        },
    });
}

export const authProvider = {
    login: () => {
        return Promise.resolve();
    },
    logout: () => {
        return Promise.resolve();
    },
    checkError: () => {
        return Promise.resolve();
    },
    checkAuth: () => {
        return Promise.reject();
    },
    getPermissions: () => {
        return Promise.resolve();
    }
};