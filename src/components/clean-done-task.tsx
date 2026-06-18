import { Trash2 } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog"
import { Button } from "./ui/button"

const CleanDoneTask = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="text-xs h-7 cursor-pointer" variant="outline"><Trash2/>Limpar tarefas concluídas</Button> 
            </AlertDialogTrigger>
            
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza que deseja excluir x itens?</AlertDialogTitle>                
              </AlertDialogHeader>
              <AlertDialogFooter>                
                <AlertDialogAction>Sim</AlertDialogAction>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )

}
export default CleanDoneTask