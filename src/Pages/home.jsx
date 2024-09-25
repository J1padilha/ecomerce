/*import { Container } from "react-bootstrap";
import { ListaProduto } from "../Componentes/componenteproduto";


function Home() {
    return (
        
        <div>
            <h2>Home</h2>
        </div>
    )
}



export default Home; */

import { Container, Nav, Navbar } from "react-bootstrap";
import CardProduto from "./CardProduto";



function NavBar(props) {
  return (
    <Container>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ marginTop: "100px" }}>{props.children}</div>
    </Container>
    
  );
}

export default NavBar;