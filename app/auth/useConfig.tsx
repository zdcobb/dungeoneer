import type { PropsWithChildren } from "react";
import { AuthProvider } from "react-oidc-context";
import { AuthConfig } from "./secrets";

// remove before merge
// export const authConfig = {
//     authority: "https://cognito-idp.us-west-2.amazonaws.com/us-west-2_EwceTGRs3",
//     client_id: "16kj4oqpkeg0d8v5h8a9uhlunh",
//     redirect_uri: "https://d84l1y8p4kdic.cloudfront.net",
//     response_type: "code",
//     scope: "email openid phone",
// };

export const signOutRedirect = () => {
    const clientId = AuthConfig.client_id;
    const logoutUri = "/logout";
    const cognitoDomain = "https://us-west-2ewcetgrs3.auth.us-west-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};

export default function CognitoAuth({ children }: PropsWithChildren) {
    return <AuthProvider {...AuthConfig}>{children}</AuthProvider>;
}
