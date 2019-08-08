import React, { ChangeEvent } from "react";
import { BoilingVerdict } from "./BoilingVerdict";

interface Props { }

interface State {
    temperature: string,
}

export class Calculator extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = { temperature: '' };
    }

    handleChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({ temperature: e.target.value });
    }

    render() {
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={this.state.temperature}
                    onChange={(e) => this.handleChange(e)} />
                <BoilingVerdict
                    celsius={parseFloat(this.state.temperature)} />
            </fieldset>
        );
    }
}