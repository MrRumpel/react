import React, { ChangeEvent } from "react";
import { BoilingVerdict } from "./BoilingVerdict";
import { TemperatureInput } from "./TemperatureInput";

interface Props { }

interface State {
  temperature: string,
  scale: string,
}

export class Calculator extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = { temperature: '', scale: 'c' };
  }


  handleCelsiusChange(temperature: string) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature: string) {
    this.setState({ scale: 'f', temperature });
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={(e) => this.handleCelsiusChange(e)} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={(e) => this.handleFahrenheitChange(e)} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }

  toCelsius(fahrenheit: number) {
    return (fahrenheit - 32) * 5 / 9;
  }

  toFahrenheit(celsius: number) {
    return (celsius * 9 / 5) + 32;
  }

  tryConvert(temperature: string, convert: (n: number) => number) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
}
