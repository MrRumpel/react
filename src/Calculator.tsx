import React, { ChangeEvent } from "react";
import { BoilingVerdict } from "./BoilingVerdict";
import { TemperatureInput } from "./TemperatureInput";

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
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}