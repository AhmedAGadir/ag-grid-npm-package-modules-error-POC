import React, { Component } from 'react'
import './App.css';


import MyAgGrid from 'dummy-react-npm-module';

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { MenuModule } from "@ag-grid-enterprise/menu";

import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <MyAgGrid
          modules={[
            ClientSideRowModelModule,
            MenuModule,
            ColumnsToolPanelModule // ** enterprise module ** not working
          ]}
        />
      </div>
    );
  }
}

export default App;
