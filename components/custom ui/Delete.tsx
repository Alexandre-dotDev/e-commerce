import { Trash } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "../ui/button"

const Delete = () => {
  return (
      <AlertDialog>
        <AlertDialogTrigger>
          <Button className="bg-red-1 text-white">
            <Trash className="h-4 w-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white text-grey-1">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-1">Você tem absoluta certeza que quer apagar esse produto?</AlertDialogTitle>
            <AlertDialogDescription>
              <p className="text-center">
                Essa ação não poderá se desfeita. Isso apagará permanetemente sua coleção.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction className="bg-red-1 text-white">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  )
}

export default Delete