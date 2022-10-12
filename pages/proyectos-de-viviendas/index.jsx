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
              
      <h2>Proyectos de vivienda <Icon name="home"/></h2>
      <Table compact celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Interesados</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Dirección</Table.HeaderCell>
            <Table.HeaderCell>Constructora</Table.HeaderCell>
            <Table.HeaderCell>Contacto</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
            <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
                onClick={() => router.push(`proyectos-de-viviendas/interesados/proyecto/${777}`)}
              >
                <Icon name="users" />Personas interesadas
              </Button>
            </Table.Cell>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell collapsing className={styles.delete_container_cell}>
              <Icon name="trash" color="red"/>
            </Table.Cell>
            <Table.Cell collapsing className={styles.edit_container_cell} onClick={() => router.push(`/proyectos-de-viviendas/editar-proyecto/${123}`)}>
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
                onClick={() => router.push("/proyectos-de-viviendas/crear-proyecto")}
              >
                <Icon name="home" /> Crear un nuevo proyecto
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
