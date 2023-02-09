import * as yup from 'yup';

export const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('O campo e-mail é obrigatório'),
  password: yup
    .string()
    .required('O campo senha é obrigatório'),
});
