import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";
import { GoogleAuthButton } from "@/shared/forms/google-auth-button";

export function SignInForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    De momento la única opción disponible es Google
                </CardTitle>
            </CardHeader>
            <CardContent>
                <GoogleAuthButton />
            </CardContent>
        </Card>
    )
}