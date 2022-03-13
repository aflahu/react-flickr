import { Component, ReactElement, useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Pagination,
} from "react-bootstrap";

interface Props {
  count: number;
}

const AppPagination: React.FC<Props> = ({ count }) => {
  const [items, setItems] = useState<any[]>([]);
  const [active, setActive] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let _total: number = Math.floor(count / 5);
    if (_total > 12) {
      _total = 12;
    }
    setTotal(_total);
    setItems(
      Array(_total)
        .fill(0)
        .map((e, i) => i + 1)
    );
  }, [count]);

  return (
    <Container>
      <Pagination className="d-flex justify-content-center">
        {items.map((key) => {
          return (
            <Pagination.Item key={key} active={key === active}>
              {key}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </Container>
  );
};

export default AppPagination;
