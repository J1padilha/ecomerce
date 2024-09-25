import { Button, Card } from "react-bootstrap";


function CardProduto({ idProduto, nome, preco, descricao, linkImagem }) {
    return (
      <div>
         <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={"https://i.ytimg.com/vi/1zJ4Z_-Yf_o/maxresdefault.jpg"} />
          <Card.Body>
            <Card.Title>{"PS5 PRO - BLACK"}</Card.Title>
            <Card.Text>
              {"R$1.000.000,00"} - {"PS5 Pro"}
            </Card.Text>
            <Button variant="primary">Adicionar</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={"https://i.ytimg.com/vi/1zJ4Z_-Yf_o/maxresdefault.jpg"} />
          <Card.Body>
            <Card.Title>{"PS5 PRO - BLACK"}</Card.Title>
            <Card.Text>
              {"R$1.000.000,00"} - {"PS5 Pro"}
            </Card.Text>
            <Button variant="primary">Adicionar</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={"https://i.ytimg.com/vi/1zJ4Z_-Yf_o/maxresdefault.jpg"} />
          <Card.Body>
            <Card.Title>{"PS5 PRO - BLACK"}</Card.Title>
            <Card.Text>
              {"R$1.000.000,00"} - {"PS5 Pro"}
            </Card.Text>
            <Button variant="primary">Adicionar</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }

  export default CardProduto ;