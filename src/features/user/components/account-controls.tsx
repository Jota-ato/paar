import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/shared/components/ui/alert-dialog";
import { Button } from "@/shared/components/ui/button";

export function AccountControls() {
  return (
    <div className="flex flex-col gap-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>
            Cerrar sesión
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Cerrar esión
            </AlertDialogTitle>
            <AlertDialogDescription>
              ¿Estás seguro de que quieres cerrar tu sesión?
            </AlertDialogDescription>
            <div>
              <AlertDialogCancel asChild>
                <Button variant="outline">Cancelar</Button>
              </AlertDialogCancel>
              <Button variant="destructive">Cerrar sesión</Button>
            </div>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
      <Button variant="outline">
        Borrar cuenta
      </Button>
    </div>
  )
}