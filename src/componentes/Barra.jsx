import React from 'react'
import { Navbar,Container,Offcanvas,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';

export default function Barra() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Brand href="#">SysMatricula</Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#">Salir</Navbar.Brand>
                    
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Opciones</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                              
                                <Nav.Link href="#action2">Inicio</Nav.Link>

                                <NavDropdown title="Padrón de Matriculas" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="/VisualizarMatriculas">Visualizar Matriculas</NavDropdown.Item>
                                    <NavDropdown.Item href="/MatricularEstudiante">Matricular Estudiante</NavDropdown.Item>
                                    <NavDropdown.Item href="/EditarMatricula">Editar Matricula</NavDropdown.Item>
                                    <NavDropdown.Item href="/Inicio">Inicio</NavDropdown.Item>
                                   
                                   
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
