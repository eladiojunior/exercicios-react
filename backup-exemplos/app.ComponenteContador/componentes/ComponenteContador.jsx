import React from "react";
export default class ComponenteContador extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: (props.initialValue || 0) }
    }
    calcular(delta) {
        this.setState( { value: this.state.value + delta } );
    }
    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.calcular(-1)}>Subtrair</button>
                <button onClick={() => this.calcular(1)}>Somar</button>
            </div>
        );
    }
}