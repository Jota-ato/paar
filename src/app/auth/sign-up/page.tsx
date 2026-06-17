import { SignUpForm } from "@/features/auth/components/sign-up-form";
import { Heading } from "@/shared/components/typography/heading";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export default function SignUpPage() {

    return (
        <section className="min-h-screen w-full flex items-center justify-center">
            <main className="max-w-xl w-[90%] mx-auto">
                <Heading className="text-center mb-8">Crear cuenta</Heading>
                <SignUpForm />
                <div className="flex justify-between">
                    <Button
                        variant="link"
                    >
                        <Link
                            href="/auth/sign-in"
                        >
                            Iniciar sesión
                        </Link>
                    </Button>
                </div>
            </main>
        </section>
    )
}