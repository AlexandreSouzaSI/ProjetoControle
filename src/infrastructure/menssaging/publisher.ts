import RabbitmqServer from './rabbitMQ-server';
import { IOfertasDTO } from './../../useCases/Ofertas/IOfertasDTO';
import { IOfertasImagensDTO } from './../../useCases/OfertasImagens/IOfertasImagensDTO';

export class rabbitMQPublisher {
    static async publishInRabbitMQ(id: string, action: string, data?: IOfertasDTO, url?: IOfertasImagensDTO){
        console.log('[X] message send to exchange associate.fanout')
        const server = new RabbitmqServer(process.env.RABBIT_STRING_CONNECTION);
        await server.start();
        console.log(data)
        await server.publishInExchange('offer.fanout', 'fanout',JSON.stringify({
          id: id,
          url: url.url,
          action: action,
          data: data
        }) )
      }        
    }
