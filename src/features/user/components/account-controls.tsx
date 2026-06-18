"use client"
import { signOut } from "@/lib/auth-client";
import { AlertDialogCustom } from "@/shared/components/ui/alert-dialog-custom";
import { Separator } from "@/shared/components/ui/separator";
import { LogOut, TriangleAlert } from "lucide-react";
import { redirect } from "next/navigation";

export function AccountControls() {

  const logOut = async () => {
    await signOut()
    redirect("/")
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
        action={() => console.log('Borrando...')}
      />
    </div>
  )
}