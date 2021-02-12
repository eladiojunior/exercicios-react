import React from "react";
export default class ComponenteClasse extends React.Component {
    render() {
        return (
            <h1>{this.props.value}</h1>
        );
    }
}