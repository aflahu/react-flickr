import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Pagination, Row } from "react-bootstrap";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

import "./App.scss";
import Appbar from "./components/Appbar";
import AppPagination from "./components/AppPagination";
import Images from "./components/Images";
import config from "./config";
import { AppState, LocalStorageKey, recoilState } from "./dataStructure";
import { IData } from "./interfaces/data";

function App() {
  const [appState, setAppState] = useRecoilState<AppState>(recoilState);

  useEffect(() => {
    window.localStorage.setItem(
      LocalStorageKey.APP_STATE,
      JSON.stringify(appState) // convert JavaScript Object to string
    );
    axios(config.backendUrl)
      .then((res) => res.data)
      .then((result) => {
        const data: IData = {
          data: result.data,
          count: result.count,
        };
        setAppState({ ...appState, data });
      });
  }, []);
  return (
    <div className="App">
      <Appbar />
      <Images data={appState.data.data} />
      <AppPagination count={appState.data.count} />
    </div>
  );
}

export default App;
