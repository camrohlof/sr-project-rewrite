import Link from "next/link"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default function Header() {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand>
                    <Link href="/" passHref>
                        <Nav.Link>Home</Nav.Link>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Link href="/calendar" passHref>
                            <Nav.Link>Calendar</Nav.Link>
                        </Link>
                        <Link href="/directory" passHref>
                            <Nav.Link>Directory</Nav.Link>
                        </Link>
                        <Link href="/community" passHref>
                            <Nav.Link>Community</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}