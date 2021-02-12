import React from "react";
const Primeiro = (props) => (
    <div>
        <h1>{props.value || "Componente1"}</h1>
    </div>
);
export const Segundo = (props) => <h1>{props.value || "Componente2"}</h1>;
export default Primeiro;