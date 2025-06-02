import { Form, Link } from "react-router";
import Button, { ButtonTypes } from "~/components/buttons/button";
import PageHeader from "~/components/page/header";
import { Page, PageContent } from "~/components/page/page";
import { Input } from "~/components/ui/input";

export default function Login() {
    return (
        <Page>
            <PageHeader>Welcome back</PageHeader>
            <PageContent className="flex-1 flex flex-col items-center">
                <Form className="flex flex-col gap-10">
                    <div className="flex flex-col gap-5">
                        <Input
                            placeholder="email address"
                            type="email"
                        />
                        <Input
                            placeholder="passw*rd"
                            type="password"
                        />
                    </div>

                    <section className="flex flex-col items-center gap-5">
                        <Link
                            className="text-violet-600"
                            to="/password-recovery"
                        >
                            Forgot your password?
                        </Link>
                        <div className="flex flex-row">
                            <Button type="submit">log in</Button>
                            <Link to="..">
                                <Button btnType={ButtonTypes.secondary}>go back</Button>
                            </Link>
                        </div>
                    </section>
                </Form>
            </PageContent>
        </Page>
    );
}
