
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { GoogleAuthButton } from "@/shared/forms/google-auth-button";

export function SignUpForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    De momento la única opción disponible es Google
                </CardTitle>
            </CardHeader>
            <CardContent>
                <GoogleAuthButton mode="signup" />
            </CardContent>
        </Card>
    )
}