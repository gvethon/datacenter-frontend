import Button from 'react-bootstrap/Button';
import {Container, Navbar, Nav, Row, Col, Table} from "react-bootstrap";
import Header from "@/src/Header";

export default function Seiscomp() {
    return (
        <>
            <Header />
            <Container className="mt-4">
                <Row className="justify-content-lg-center">
                    <Col className="col-lg-8">
                        <h2>Registered Seiscomp instances</h2>
                        <Table bordered className="mt-3">
                            <thead>
                            <tr>
                                <th>Host</th>
                                <th>Login</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>sheerwer.igf.edu.pl:18001</td>
                                <td>mstaszek@igf.edu.pl</td>
                                <td>
                                    <Button href="seiscomp/1" variant="info" size="sm">View</Button>{' '}
                                    <Button variant="warning" size="sm">Edit</Button>{' '}
                                    <Button variant="danger" size="sm">Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>tytan.igf.edu.pl:18001</td>
                                <td>idobrzycka</td>
                                <td>
                                    <Button href="seiscomp/1" variant="info" size="sm">View</Button>{' '}
                                    <Button variant="warning" size="sm">Edit</Button>{' '}
                                    <Button variant="danger" size="sm">Delete</Button>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}