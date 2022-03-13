import axios from "axios";
import { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useRecoilState } from "recoil";
import config from "../config";
import { AppState, recoilState } from "../dataStructure";
import { IData } from "../interfaces/data";

interface Props {}

const Appbar: React.FC<Props> = () => {
  const [appState, setAppState] = useRecoilState<AppState>(recoilState);
  const [tags, setTags] = useState("");

  const handleChange = (event: any): void => {
    setTags(event.target.value);
  };

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    axios(config.backendUrl, { params: { tag: tags } })
      .then((res) => res.data)
      .then((result) => {
        const data: IData = {
          data: result.data,
          count: result.count,
        };
        setAppState({ ...appState, data });
      });
  };

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">React-Flickr</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={tags}
              onChange={handleChange}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
