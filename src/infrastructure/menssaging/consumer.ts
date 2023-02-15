
import RabbitmqServer from './rabbitMQ-server';
import { AssociadosRepository } from '../../repositories/implementations/AssociadosRepository';
import { IAssociadosDTO } from './../../useCases/Associados/IAssociadosDTO';
import { Associados } from '../../entities/Associados';
export class rabbitMQConsumer {
     static async consume(){
       try{
        const server = new RabbitmqServer(process.env.RABBIT_STRING_CONNECTION);
        await server.start();
        
        await server.consume('offer-associate', (message) => {
          console.log('Consume queu distraction-associate on RabbitMQ!')
          const obj = JSON.parse(message.content.toString())  
          if(obj.data.tipo_pessoa == 'Juridica'){
            this.actionsAssociate({
              id:obj.id,
              tipo_pessoa:obj.data.tipo_pessoa,
              cnpj: obj.data.cnpj,
              nome: obj.data.nome_fantasia
            },
             obj.action)
          }else{
            this.actionsAssociate({
              id:obj.id,
              tipo_pessoa:obj.data.tipo_pessoa, 
              cpf: obj.data.cpf,
              nome: obj.data.nome_completo
            }, 
            obj.action)
          }
        }
        );

       }catch(err){
        console.log('Erro:' + err.message)
       }
      }

       static async actionsAssociate(data: IAssociadosDTO, action: string){
        const repo = new AssociadosRepository()
        try{
            switch(action) {
             case "create": 
             await repo.create(new Associados(data, data.id))
             break;
             case "delete": 
             await repo.delete(data.id)
             break;
             case "update": 
             await repo.update(new Associados(data, data.id), data.id)
             break;
            } 
        }catch(err){
            console.log('Erro:' + err.message)
        }
       }

}

