import React, { ChangeEvent } from "react";

interface Props {}

interface State {}

export class TemperatureInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {temperature: ''};
    }

    handleChange(e:ChangeEvent<HTMLInputElement>) {
        this.setState({temperature: e.target.value});
      }
    
      render() {
        const scale = this.props.scale;
        return (
          <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature}
                   onChange={this.handleChange} />
          </fieldset>
        );
      }
}