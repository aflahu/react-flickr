import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { IDataItem } from "../interfaces/data";

interface Props {
  item: IDataItem
}
const ImageItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="ImageItem">
      <Col className="mb-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.media[0].m} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {`${item.author} posted at ${new Date(
                item.published
              ).toLocaleDateString("en-US")}`}
            </Card.Subtitle>
            <Card.Link href={item.link}>See at flickr</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ImageItem;
