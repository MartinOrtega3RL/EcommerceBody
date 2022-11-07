import { Container, Nav, Navbar } from "react-bootstrap";


export default function Header(){

return(
    <>
        <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><i className="fa-brands fa-shopify"></i>{' '}Autoservicio Libertad</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <div>
                                  <input type="search" className="form-control form-control-dark text-center" placeholder="Buscar Producto..." aria-label="Buscar"/>
                            </div>
                          
                        </form>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/"><i className="fa-regular fa-user"></i>{'   '}Mi Cuenta</Nav.Link>
                            <Nav.Link href="/"><i className="fa-solid fa-cart-shopping "><span class="badge bg-primary rounded-pill">6</span></i>{'   '}Carrito</Nav.Link>
                            <Nav.Link href="/"><i className="fa-solid fa-headset"></i>{'   '}Soporte</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
)







}