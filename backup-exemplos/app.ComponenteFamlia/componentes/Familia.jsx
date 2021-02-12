import React from "react";
import {childrenWithProps} from "../utils/reactUtils";

export default props => (
    <div>
        <h1>Família</h1>
        {
        //Não funiona para vários componentes.
        //React.cloneElement(props.children, {...props})

        //Para funcionar, precisa montar um conversor um-a-um dos componentes (flhos).
        //React.Children.map(props.children, 
        //    child => React.cloneElement(child, {...props}))
        
        //Criação de arquivo útil para realizar a migração das 'props' aos componentes filhos...
        childrenWithProps(props.children, props)
        }
    </div>
)