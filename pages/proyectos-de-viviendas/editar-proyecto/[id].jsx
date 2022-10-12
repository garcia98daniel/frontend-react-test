import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Header, Form, Button, Container, Select } from 'semantic-ui-react'
import { useRouter } from "next/router";
function index(props) {
    const router = useRouter();
    const genderOptions = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
      ]

    return (
        <>
    <Header as='h3' block>
    Modulo Proyectos de viviendas
    </Header>
    <Container>
      <h2>Editar proyecto :id</h2>
    <Form>
      <Form.Field>
        <label>Nombre</label>
        <input placeholder='Nombre' />
      </Form.Field>
      <Form.Field>
        <label>Dirección</label>
        <input placeholder='Dirección' />
      </Form.Field>
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Constructora', htmlFor: 'form-select-control-constructora' }}
        placeholder='Constructora'
        search
        searchInput={{ id: 'form-select-control-constructora' }}
      />
      <Form.Field>
        <label>Contacto</label>
        <input placeholder='Contacto' />
      </Form.Field>
      
      <Button primary type='submit'>Guardar</Button>
      <Button onClick={() => router.back()} type='submit'>Volver</Button>
    </Form>
    </Container>
    </>
    );
}

export default index;