import Button from 'react-bootstrap/Button';
import {Col, Container, Row, Table} from "react-bootstrap";
import Header from "@/src/Header";

export default function Seiscomp() {
    const seiscomps = [
        {
            "id": "1",
            "host": "sheerwer.igf.edu.pl:18001",
            "login": "mstaszek@igf.edu.pl"
        },
        {
            "id": "2",
            "host": "tytan.igf.edu.pl:18001",
            "login": "idobrzycka"
        }
    ]

    return (
        <>
            <Header/>
            <Container className="mt-4">
                <Row className="justify-content-lg-center">
                    <Col className="col-lg-9">
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
                            {seiscomps.map(seiscomp =>
                                <>
                                    <tr>
                                        <td>{seiscomp.host}</td>
                                        <td>{seiscomp.login}</td>
                                        <td>
                                            <Button href={`/seiscomp/${seiscomp.id}`} variant="info" size="sm">View</Button>{' '}
                                            <Button variant="warning" size="sm">Edit</Button>{' '}
                                            <Button variant="danger" size="sm">Delete</Button>
                                        </td>
                                    </tr>
                                </>
                            )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}