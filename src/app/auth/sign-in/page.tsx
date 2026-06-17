import { Heading } from "@/shared/components/typography/heading";
import { Card } from "@/shared/components/ui/card";
import { GoogleAuthButton } from "@/shared/forms/google-auth-button";

export default function SignUpPage() {
    return (
        <section className="min-h-screen w-full flex items-center justify-center">
            <main className="max-w-xl w-[90%] mx-auto">
                <Heading>Sign in</Heading>

                <Card className="flex flex-col items-center justify-center my-12">
                    <Heading level={2}>The only available option is Google</Heading>
                    <div className="h-0.5 w-full bg-muted-foreground my-8" />
                    <GoogleAuthButton />
                </Card>
            </main>
        </section>
    )
}