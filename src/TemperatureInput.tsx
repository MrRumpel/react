import React, { ChangeEvent } from 'react'

interface Props {
  scale: 'c' | 'f',
  temperature: string,
  onTemperatureChange: (n: string) => void,
}

interface State {
  temperature: string,

}

export class TemperatureInput extends React.Component<Props, State> {
  scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = { temperature: '' };
  }

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in {this.scaleNames[this.props.scale]}:</legend>
        <input value={this.props.temperature}
          onChange={(e) => this.handleChange(e)} />
      </fieldset>
    );
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.props.onTemperatureChange(e.target.value);
  }
}
