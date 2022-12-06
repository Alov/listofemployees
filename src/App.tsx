import React from 'react';
import logo from './logo.svg';
import './App.css';
import JsTree from './components/Jstree/JsTree';
import Treegrid from './components/Treegrid/Treegrid'
import Store from "./Storage/Store";

function App() {
    let store = new Store();
    store.init();
    console.log(store.getEmployeeById(6))
    console.log(store.getAllEmpoyeers())
    return (
        <div className="App">
            <header className="App-header">
                <div className="row">
                    <div className="col-md-4"><JsTree store={store} /></div>
                <div className="col-md-8"><Treegrid /></div>
                </div>
            </header>
        </div>
    );

}

export default App;