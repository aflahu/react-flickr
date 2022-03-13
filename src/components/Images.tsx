import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { IDataItem } from "../interfaces/data";
import ImageItem from "./ImageItem";

interface Props {
  data: IDataItem[];
}
const Images: React.FC<Props> = ({ data }) => {
  return (
    <div className="Images">
      <Container className="mt-5">
        <Row lg={3}>
          {data.map((item: any) => {
            return <ImageItem key={item.link} item={item} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Images;
