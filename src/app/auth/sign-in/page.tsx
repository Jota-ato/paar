import { SignInForm } from "@/features/auth/components/sign-in-form";
import { Heading } from "@/shared/components/typography/heading";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <section className="min-h-screen w-full flex items-center justify-center">
            <main className="max-w-xl w-[90%] mx-auto">
                <Heading className="text-center mb-8">Iniciar sesión</Heading>
                <SignInForm />
                <div className="flex justify-between">
                    <Button
                        variant="link"
                    >
                        <Link
                            href="/auth/sign-up"
                        >
                            Crear cuenta
                        </Link>
                    </Button>
                </div>
            </main>
        </section>
    )
}