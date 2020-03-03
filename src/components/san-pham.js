import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class ProductsApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: "401f7ced-3249-4945-87ef-65bd2c3dbbda",
          name: "Rice - Sushi",
          discription:
            "nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus",
          imgUML: "http://dummyimage.com/300x200.png/ff4444/ffffff"
        },
        {
          id: "871576e8-152d-4b74-b801-99125304fdca",
          name: "Pepsi - Diet, 355 Ml",
          discription:
            "tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus",
          imgUML: "http://dummyimage.com/300x200.bmp/dddddd/000000"
        },
        {
          id: "711b6f51-84ea-4f6f-896e-bb38645b6310",
          name: "Cookie Trail Mix",
          discription:
            "in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in",
          imgUML: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "785aefd7-4f25-4708-bcb9-990050aea867",
          name: "Turkey - Breast, Boneless Sk On",
          discription:
            "lorem ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien",
          imgUML: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: "b21d531d-a347-41c9-a3da-01baa2112654",
          name: "Boogies",
          discription:
            "quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo",
          imgUML: "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
        },
        {
          id: "2b88266f-950e-49f9-851a-7f241ed17844",
          name: "Pastry - Choclate Baked",
          discription:
            "id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo",
          imgUML: "http://dummyimage.com/300x200.png/ff4444/ffffff"
        },
        {
          id: "3e647985-75a5-4abe-82a1-d7983df3a3a6",
          name: "Wine - Casillero Deldiablo",
          discription:
            "quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin",
          imgUML: "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
        },
        {
          id: "1eda5d23-3d7b-4521-a52c-f85c453bb6c7",
          name: "Mushrooms - Black, Dried",
          discription:
            "nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros",
          imgUML: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "0b000568-b73b-4bc7-a24e-550559f0fb1a",
          name: "Chocolate - Compound Coating",
          discription:
            "hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer",
          imgUML: "http://dummyimage.com/300x200.png/dddddd/000000"
        },
        {
          id: "ea03cacd-1e8d-418c-827c-8bd93fca4331",
          name: "Wine - George Duboeuf Rose",
          discription:
            "eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a",
          imgUML: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        }
      ]
    };
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        
        <Row>
          {products.map(products => (
            <Col sm="3">
              <Card>
                <CardImg top width="100%" src={products.imgUML} />
                <CardBody>
                  <CardTitle>{products.name}</CardTitle>
                  <CardSubtitle>{products.decription}</CardSubtitle>

                  <Button>Thêm vào giỏ</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ProductsApp;
