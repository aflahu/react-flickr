import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Images from "./components/Images";
import axios from "axios";
import { RecoilRoot } from "recoil";

test("appbar should to be in the document", () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const appbar = screen.getByText(/React-Flickr/i);
  expect(appbar).toBeInTheDocument();
});

test("See at flickr should to be in the document", async () => {
  let links = [];
  const data = await axios("http://localhost:4040/api/public-photos").then(
    (res) => res.data
  );
  render(<Images data={data.data} />);

  links = screen.getAllByText(/See at flickr/i);
  links.forEach((link) => {
    expect(link).toBeInTheDocument();
  });
});
