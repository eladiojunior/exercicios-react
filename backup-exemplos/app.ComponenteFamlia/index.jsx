import React from "react";
import ReactDOM from "react-dom";
import Familia from "./componentes/Familia"
import Membro from "./componentes/Membro"
ReactDOM.render(
<div>
    <Familia ultimoNome="Magalhaes">
        <Membro nome="Eladio"/>
        <Membro nome="Daniela"/>
        <Membro nome="Gustavo"/>
        <Membro nome="Beatriz"/>
    </Familia>
</div>
, document.getElementById("app"));