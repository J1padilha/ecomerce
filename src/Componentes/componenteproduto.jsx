import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import api from "../_service/api";



function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  async function ListaProdutos() {
    console.log("listaUser");

    try {
      const response = await api.get("/productlistbyremark/home");
      setProdutos(response.data);
    } catch (error) {
      alert("DEU ERRO");
    }
  }

  useEffect(() => {
    ListaProdutos();
  }, []);

  return (
    <div>
      <Row>
      <h2>ListaProdutos</h2>

      
      </Row>
    </div>
  );
}

export default ListaProdutos