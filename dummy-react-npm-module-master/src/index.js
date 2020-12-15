import React, { Component } from 'react';
import { AgGridReact } from "@ag-grid-community/react";

// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default class MyAgGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [{ field: "make" }, { field: "model" }, { field: "price" }],
            defaultColDef: {
                flex: 1,
                minWidth: 100
            },
            rowData: [
                { make: "Toyota", model: "Celica", price: 35000 },
                { make: "Ford", model: "Mondeo", price: 32000 },
                { make: "Porsche", model: "Boxter", price: 72000 }
            ]
        };
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    render() {
        return (
            <div
                className="ag-theme-alpine"
                style={{ height: 500 }}
            >
                <AgGridReact
                    onGridReady={this.onGridReady.bind(this)}
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    sideBar={"columns"}
                    modules={this.props.modules}
                />
            </div>
        );
    }
}
