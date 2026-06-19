"use client"
import { authClient, signOut } from "@/lib/auth-client";
import { AlertDialogCustom } from "@/shared/components/ui/alert-dialog-custom";
import { Separator } from "@/shared/components/ui/separator";
import { LogOut, TriangleAlert } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";

export function AccountControls() {

  const router = useRouter()

  const logOut = async () => {
    await signOut()
    toast.success('Sesión cerrada exitosamente')
    redirect("/")
  }

  const deleteAccount = async () => {

    try {
      await authClient.deleteUser({
        callbackURL: "/"
      })

      toast.success('Cuenta borrada exitosamente')
      router.push("/")

    } catch (error) {
      toast.error('Hubo un error al borrar la cuenta')
    }
  }
  return (
    <div className="flex flex-col gap-4">
      <AlertDialogCustom
        triggerLabel="Cerrar sesión"
        dialogTitle="¿Seguro que quieres cerrar sesión?"
        actionLabel="Cerrar"
        triggerIcon={LogOut}
        action={logOut}
      />

      <Separator className="bg-destructive/30" />

      <AlertDialogCustom
        triggerLabel="Borrar cuenta"
        dialogDescription="Esta acción no se puede deshacer"
        dialogTitle="¿Estás seguro de que quieres borrar tu cuenta?"
        actionLabel="Borrar"
        triggerIcon={TriangleAlert}
        action={deleteAccount}
      />
    </div>
  )
}