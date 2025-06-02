import { Form, Link } from "react-router";
import Button, { ButtonTypes } from "~/components/buttons/button";
import PageHeader from "~/components/page/header";
import { Page, PageContent } from "~/components/page/page";
import { Input } from "~/components/ui/input";

export default function Register() {
    return (
        <Page>
            <PageHeader>Create a profile</PageHeader>
            <PageContent className="flex flex-col">
                <Form className="flex flex-col gap-5">
                    <Input
                        placeholder="email address"
                        type="email"
                    />
                    <Input
                        placeholder="passw*rd"
                        type="password"
                    />
                    <div>
                        <Button type="submit">register</Button>
                        <Button btnType={ButtonTypes.secondary}>
                            <Link to="..">go back</Link>
                        </Button>
                    </div>
                </Form>
            </PageContent>
        </Page>
    );
}
