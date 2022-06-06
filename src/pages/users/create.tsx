import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Input } from '../../components/Form/input';
import { Header } from '../../components/Header/Index';
import { Sidebar } from '../../components/Sidebar/Index';

interface CreateUserForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('E-email obrigatório').email('Precisa ser um e-mail válido'),
  password: yup.string().required('Senha obrigatória').min(8, 'Precisa ter 8 caracteres'),
  password_confirmation: yup.string().oneOf([
    null,
    yup.ref('password')
  ], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserForm> = async (values) => {
    console.log(errors, values);
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />
        <Box
          as='form'
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size='lg' fontWeight='semibold'>
            Criar usuários
          </Heading>
          <Divider my='6' borderColor='gray.700' />

          <VStack spacing={['8']}>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                name='name'
                label="Nome Completo"
                {...register('name')}
                error={errors.name}
              />
              <Input
                name='email'
                label="E-mail"
                type='email'
                {...register('email')}
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                name='password'
                type='password'
                label="Senha"
                {...register('password')}
                error={errors.password}
              />
              <Input
                name='password_confirmation'
                type='password'
                label="Confirmação da senha"
                {...register('password_confirmation')}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref>
                <Button colorScheme='whiteAlpha'>Cancelar</Button>
              </Link>
              <Button
                colorScheme='pink'
                type='submit'
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}