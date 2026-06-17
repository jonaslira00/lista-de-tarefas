import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader} from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Plus, ListCollapse, ListX, ListChecks, SquarePen, Trash2, ListTodo, Sigma } from 'lucide-react';

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">      
      
      <Card className="w-lg ">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa"/>
          <Button className="cursor-pointer"><Plus/>Cadastrar</Button>
        </CardHeader>

        

        <CardContent>
          <Separator className="mb-4" />  
          
          <div className="flex gap-2 py-2">
            <Badge className="cursor-pointer" variant="default"><ListCollapse />Todas</Badge>
            <Badge className="cursor-pointer" variant="outline"><ListX />Não finalizadas</Badge>
            <Badge className="cursor-pointer" variant="outline"><ListChecks  />Finalizadas</Badge>
          </div>

          <div className="mt-4 border-b">

            <div className="h-14 flex justify-between items-center border-t">
              <div className="w-1 h-full bg-primary"></div>
              <p className="flex-1 px-2 text-sm">Estudar react</p>
              <div className="flex items-center gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <SquarePen size={16} className="cursor-pointer"/>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar tarefa</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-2">
                      <Input placeholder="Editar tarefa"/>
                      <Button className="cursor-pointer">Editar</Button>
                    </div>
                  </DialogContent>
                </Dialog>  
                <Trash2 size={16} className="cursor-pointer"/>
              </div>              
            </div>           

          </div>

          

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <ListTodo size={18} />
              <p className="text-xs">Tarefas concluídas (2/2)</p>
            </div> 
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
          </div>

          <div className="bg-gray-200 mt-4 h-2 rounded-md">
            <div className="h-full bg-primary rounded-md" style={{ width: "50%"}}></div>
          </div>          

          <div className="flex justify-end items-center mt-2 gap-2">
            <Sigma size={18}/>
            <p className="text-xs">3 tarefas no total</p>
          </div>    

        </CardContent>

        



      </Card> 

    </main>
  )
}

export default Home