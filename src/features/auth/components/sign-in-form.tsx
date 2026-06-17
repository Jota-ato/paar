import { CardHeading } from "@/shared/components/typography/card-heading";
import { Heading } from "@/shared/components/typography/heading";
import { Card } from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";
import { GoogleAuthButton } from "@/shared/forms/google-auth-button";

export function SignInForm() {
    return (
        <Card className="flex flex-col items-center justify-center">
            <CardHeading>De momento la única opción disponible es Google</CardHeading>
            <Separator className="my-6" />
            <GoogleAuthButton />
        </Card>
    )
}