import { Button, Flex, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Input } from '../components/Form/input';
// controlled: faz um gerenciamento campo a campo
// indicado para formulários menores. const [name, setName] = useState('')

// UnControlled: faz um gerenciamento melhor do
// formulário, melhor desempenho, mais indicado para formulário com diversos campos
// é oque sera utilizado aq 


interface SingInFormData {
  email: string;
  password: string;
}

const singInFormSchema = yup.object().shape({
  email: yup.string().required('E-email obrigatório').email('Precisa ser um e-mail válido'),
  password: yup.string().required('Senha obrigatória').min(8, 'Precisa ter 8 caracteres')
})

export default function SingIn() {

  const {
    register,
    handleSubmit,
    formState
  } = useForm<SingInFormData>({ resolver: yupResolver(singInFormSchema) });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SingInFormData> = async (values) => {
    console.log(errors, values);
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDirection='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name='email'
            label='E-mail'
            type='email'
            error={errors.email}
            {...register('email')}
          />

          <Input
            name='password'
            label='Senha'
            type='password'
            {...register('password')}
            error={errors.password}
          />
        </Stack>

        <Button
          type='submit'
          marginTop={6}
          colorScheme='pink'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
