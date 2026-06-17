import { Heading } from "@/shared/components/typography/heading";
import { Card } from "@/shared/components/ui/card";
import { Container } from "@/shared/components/ui/container";
import { Separator } from "@/shared/components/ui/separator";
import { GoogleAuthButton } from "@/shared/forms/google-auth-button";

export default function SignUpPage() {

    return (
        <section className="min-h-screen w-full flex items-center justify-center">
            <main className="max-w-xl w-[90%] mx-auto">
                <Heading>Sign Up</Heading>

                <Card className="flex flex-col items-center justify-center my-12">
                    <Heading level={2}>The only available option is Google</Heading>
                    <Separator className="my-6" />
                    <GoogleAuthButton />
                </Card>
            </main>
        </section>
    )
}