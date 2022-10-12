import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Header, Form, Button, Container, Select, Icon } from 'semantic-ui-react'
import { useRouter } from "next/router";
function index(props) {
    const router = useRouter();
    const projectOptions = [
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
      <h2>Editar usuario interesado <Icon name="user"/></h2>
    <Form>
      <Form.Field>
        <label>Nombre completo</label>
        <input placeholder='Nombre completo' />
      </Form.Field>
      <Form.Field>
        <label>Número de teléfono</label>
        <input placeholder='Número de teléfono' />
      </Form.Field>
      <Form.Field
        control={Select}
        options={projectOptions}
        label={{ children: 'proyecto', htmlFor: 'form-select-control-proyecto' }}
        placeholder='proyecto'
        search
        searchInput={{ id: 'form-select-control-proyecto' }}
      />
      <Form.Input
              required
              placeholder="Fecha"
              label={<h4>Fecha de nacimiento</h4>}
              type="date"
              name="Fecha"
              id="date_of_birth"
            //   value={values.date_of_birth}
            //   onChange={(e) => handleChangeForm("date_of_birth", e.target.value)}
            />
      <Form.Field>
        <label>Ciudad</label>
        <input placeholder='Ciudad' />
      </Form.Field>
      <Button primary type='submit'>Guardar cambios</Button>
      <Button onClick={() => router.back()} type='submit'>Volver</Button>
    </Form>
    </Container>
    </>
    );
}

export default index;