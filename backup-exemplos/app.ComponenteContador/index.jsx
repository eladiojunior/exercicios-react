import React from "react";
import ReactDOM from "react-dom";
import Componente from "./componentes/ComponenteContador"
ReactDOM.render(
<div>
    <Componente label="Contador" initialValue={10}/>
</div>
, document.getElementById("app"));