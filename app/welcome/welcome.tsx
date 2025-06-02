import { useAuth } from "react-oidc-context";
import { Link } from "react-router";
import Button, { ButtonTypes } from "~/components/buttons/button";
import PageHeader from "~/components/page/header";
import { Page, PageContent } from "~/components/page/page";

const STRINGS = {
    title: "Dungeoneer",
    loginBtn: "log in",
    registerBtn: "new user?",
};

export default function Welcome() {
    const auth = useAuth();

    return (
        <Page>
            <PageHeader>
                <h1 className="font-bold text-5xl sm:text-8xl lg:text-[16rem]">{STRINGS.title}</h1>
            </PageHeader>

            <PageContent className="flex flex-row gap-25 items-center">
                <Button
                    btnType={ButtonTypes.primary}
                    className="h-25 w-50 rounded-full text-2xl"
                    onClick={() => auth.signinRedirect()}
                >
                    {STRINGS.loginBtn}
                </Button>

                <Link to="/register">
                    <Button
                        btnType={ButtonTypes.secondary}
                        className="h-25 w-50 rounded-full text-2xl"
                    >
                        {STRINGS.registerBtn}
                    </Button>
                </Link>
            </PageContent>
        </Page>
    );
}
