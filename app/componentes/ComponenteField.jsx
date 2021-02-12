import React from "react";
class ComponenteField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: (props.initialValue || "Digite algo") }
    }
    handleChange(event)
    {
        let value = event.target.value;
        if (value === "") value = "Digite algo novamente";
        this.setState( { value: value } );
    }
    render() {
        return (
            <div>
                <label>{this.state.value}</label><br/>
                <input onChange={(e) => this.handleChange(e)} type="text"/>
            </div>
        );
    }
}
export default ComponenteField;