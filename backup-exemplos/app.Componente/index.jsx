import React from "react";
import ReactDOM from "react-dom";
import Primeiro, {Segundo} from "./componentes/Componente"
ReactDOM.render(
<div>
    <Primeiro value="Componente 1"/>
    <Segundo value="Componente 2"/>
</div>
, document.getElementById("app"));