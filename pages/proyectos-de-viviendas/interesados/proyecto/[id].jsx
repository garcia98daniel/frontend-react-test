import React from "react";
import { Container, Header, Button, Checkbox, Icon, Table } from "semantic-ui-react";
import { useRouter } from "next/router";
import styles from "./styles.module.css"
function index(props) {
    const router = useRouter();

  return (
    <>
      <Header as="h3" block>
        Modulo Proyectos de viviendas 
      </Header>
      <Container>
      <h2 onClick={() => router.back()} ><Icon name="arrow circle left"/> volver</h2>      
      <h2>Personas interesadas en el proyecto :id<Icon name="users"/></h2>
      <Table compact celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre completo</Table.HeaderCell>
            <Table.HeaderCell>Número de teléfono</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Edad</Table.HeaderCell>
            <Table.HeaderCell>Ciudad</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>32145689</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>Edad</Table.Cell>
            <Table.Cell>Santa Marta</Table.Cell>
            <Table.Cell collapsing className={styles.delete_container_cell}>
              <Icon name="trash" color="red"/>
            </Table.Cell>
            <Table.Cell collapsing className={styles.edit_container_cell} onClick={() => router.push(`/proyectos-de-viviendas/interesados/editar/${123}`)}>
              <Icon name="edit" />
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
                onClick={() => router.push("/proyectos-de-viviendas/interesados/agregar")}
              >
                <Icon name="user" /> Agregar un nuevo interesado
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Container>

    </>
  );
}

export default index;
