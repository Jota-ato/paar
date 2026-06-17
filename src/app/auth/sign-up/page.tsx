import { Heading } from "@/shared/components/typography/heading";
import { Container } from "@/shared/components/ui/container";
import { GoogleAuthButton } from "@/shared/forms/google-auth-button";

export default function SignUpPage() {

    return (
        <section className="min-h-screen w-full flex items-center justify-center">
            <Container>
                <Heading>Sign up</Heading>

                <div className="flex items-center justify-center my-12">
                    <GoogleAuthButton />
                </div>
            </Container>
        </section>
    )
}