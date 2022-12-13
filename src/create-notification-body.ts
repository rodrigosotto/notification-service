import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  //PAA FAZER VALIDAÇÃO NO NEST USAMOS DECORATOR
  //quais sao os campos que minha notifications precisa ou tem para cirar uma notificacao
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5,240)
  content: string;

  @IsNotEmpty()
  category: string;
}
