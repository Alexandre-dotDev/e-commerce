"use client"

import { useState } from "react"
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
import toast from "react-hot-toast"

interface DeleteProps {
  id:string,
}

const Delete: React.FC<DeleteProps> = ({ id }) => {

  const [loading, setLoading] = useState(false)

  const onDelete = async () => {
    try {
      setLoading(true)

      const res = await fetch(`api/collections/${id}`, {
        method: "DELETE",
      })

      if(res.ok){
        setLoading(false)
        window.location.href = ("/collections")
        toast.success("Coleção apagada!")
      }
      
    } catch (error) {
      toast.error("Algo deu errado! Por favor tente novamente")
    }
  }

  return (
      <AlertDialog>
        <AlertDialogTrigger>
          <Button className="bg-red-1 text-white">
            <Trash className="h-4 w-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white text-grey-1">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-1">Você tem absoluta certeza que quer apagar essa coleção?</AlertDialogTitle>
            <AlertDialogDescription>
              <p className="text-center">
                Essa ação não poderá se desfeita. Isso apagará permanetemente sua coleção.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction className="bg-red-1 text-white" onClick={onDelete}>Deletar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  )
}

export default Delete