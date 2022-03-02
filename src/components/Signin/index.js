import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SiginElements'

const Sigin = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to="/" >dolla</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sigin to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type="password" required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forget Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default Sigin