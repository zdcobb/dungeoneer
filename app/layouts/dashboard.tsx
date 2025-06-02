import { useAuth } from "react-oidc-context";
import { redirect } from "react-router";
import PageHeader from "../components/page/header";

const STRINGS = {
    errorTitle: "Encountered an auth error...",
    loading: "...Loading...",
};

export default function Dashboard({ children }: React.PropsWithChildren) {
    const auth = useAuth();

    if (auth.isLoading) {
        return (
            <section>
                <PageHeader>{STRINGS.loading}</PageHeader>
            </section>
        );
    }

    if (auth.error) {
        return (
            <section>
                <PageHeader>{STRINGS.errorTitle}</PageHeader>
                <p>{auth.error.message}</p>
            </section>
        );
    }

    if (auth.isAuthenticated) {
        return (
            <section>
                <section className="dashboard__navbar"></section>
                <section className="dashboard__content">{children}</section>
            </section>
        );
    } else {
        redirect("/");
    }
}
