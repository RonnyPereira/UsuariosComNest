import { Exclude } from 'class-transformer';
import { Expose } from 'class-transformer/decorators';
import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { IsNomeDeUsuarioUnico } from './is-nome-de-usuario-unico.validator';

export class Usuario {
  id: number;
  @Expose({
    name: 'username',
  })
  // essa validação foi criada @IsNomeDeUsuarioUnico
  @IsNomeDeUsuarioUnico({
    message: 'nomeDeUsuario precisa ser único ',
  })
  @IsNotEmpty({
    message: 'nomeDeUsuario é obrigatório.',
  })
  @IsString({
    message: 'nomeDeUsuario precisa ser uma string.',
  })
  nomeDeUsuario: string;
  @Expose({
    name: 'email',
  })
  @IsEmail(
    {},
    {
      message: 'email precisa ser um endereço de email válido.',
    },
  )
  email: string;

  @Expose({
    name: 'password',
  })
  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty({
    message: 'senha é obrigatório.',
  })
  senha: string;
  @Expose({
    name: 'fullName',
  })
  @IsNotEmpty({ message: 'O Nome completo e obrigatorio' })
  nomeCompleto: string;

  @Expose({
    name: 'joinDate',
  })
  dataDeEntrada: Date;
}
