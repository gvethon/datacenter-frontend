import Button from 'react-bootstrap/Button';
import {Container, Navbar, Nav, Row, Col, Table, Alert} from "react-bootstrap";
import Header from "@/src/Header";

export default function Seiscomp1() {
    return (
        <>
            <Header />
            <Container className="mt-4">
                <Row className="justify-content-lg-center">
                    <Col className="col-lg-8">
                        <h2>Seiscomp connection preview</h2>
                        <Alert key="primary" variant="primary">Host: sheerwer.igf.edu.pl:18001</Alert>
                        <Alert key="primary" variant="primary">DCID: SHEER</Alert>
                        <Alert key="primary" variant="primary">Login: mstaszek@igf.edu.pl</Alert>

                        <Table hover className="mt-3">
                            <thead>
                                <tr>
                                    <th>Episode</th>
                                    <th>Code</th>
                                    <th>Description</th>
                                    <th>Download Permission</th>
                                    <th>Start</th>
                                    <th>End</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PREESE_HALL</td>
                                    <td>KEELE</td>
                                    <td>KEELE 6TD</td>
                                    <td>["all"]</td>
                                    <td>2011-04-07 15:00:00</td>
                                    <td>2011-04-28 09:00:00</td>
                                </tr>
                                <tr>
                                    <td>PREESE_HALL</td>
                                    <td>KEELE</td>
                                    <td>KEELE 6TD</td>
                                    <td>["all"]</td>
                                    <td>2011-04-07 15:00:00</td>
                                    <td>2011-04-28 09:00:00</td>
                                </tr>
                                <tr>
                                    <td>PREESE_HALL</td>
                                    <td>KEELE</td>
                                    <td>KEELE 6TD</td>
                                    <td>["all"]</td>
                                    <td>2011-04-07 15:00:00</td>
                                    <td>2011-04-28 09:00:00</td>
                                </tr>
                                <tr>
                                    <td>PREESE_HALL</td>
                                    <td>KEELE</td>
                                    <td>KEELE 6TD</td>
                                    <td>["all"]</td>
                                    <td>2011-04-07 15:00:00</td>
                                    <td>2011-04-28 09:00:00</td>
                                </tr>
                                <tr>
                                    <td>PREESE_HALL</td>
                                    <td>KEELE</td>
                                    <td>KEELE 6TD</td>
                                    <td>["all"]</td>
                                    <td>2011-04-07 15:00:00</td>
                                    <td>2011-04-28 09:00:00</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}