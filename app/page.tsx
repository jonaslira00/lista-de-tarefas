import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Plus, ListCollapse, ListX, ListChecks   } from 'lucide-react';

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">      
      
      <Card className="w-lg">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa"/>
          <Button className="cursor-pointer"><Plus/>Cadastrar</Button>
        </CardHeader>

        

        <CardContent>
          <Separator className="mb-2" />  
          <div className="flex gap-2 p-2">
            <Badge className="cursor-pointer"><ListCollapse />Todas</Badge>
            <Badge className="cursor-pointer"><ListX />Não finalizadas</Badge>
            <Badge className="cursor-pointer"><ListChecks  />Finalizadas</Badge>
          </div>

          

        </CardContent>

        



      </Card> 

    </main>
  )
}

export default Home