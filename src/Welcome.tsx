import * as React from 'react';
import { Calculator } from './Calculator';
import { ChangeEvent, FormEvent } from 'react';



interface WelcomeProps {
    name: string
}

interface WelcomeState {
    date: Date;
    isShow: boolean;
    value: string;
}

export default class Welcome extends React.Component<WelcomeProps, WelcomeState> {
    timerID!: NodeJS.Timeout;
    listItems: JSX.Element[];
    numbers = [1, 2, 3, 4, 5];
    constructor(props: Readonly<WelcomeProps>) {
        super(props);
        this.state = { date: new Date(), isShow: false, value: '' };
        this.listItems = this.numbers.map((number) => <li key={number.toString()}>{number}</li>);
    }

    render() {
        return <h1>
            Hello, {this.state.date.toLocaleTimeString()}
            <Calculator />
            <br />
            <button onClick={() => this.clickTest(this.state.date)}>click me</button>
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>文章:
                    <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
                    </label>
                    <input type="submit" value="提交" />
                </form></div>
            <div>{this.state.value}</div>
            {this.state.isShow ? <div>show</div> : <div >no show</div>}
            <ul>{this.listItems}</ul>
        </h1>;
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
            isShow: false,
        });
    }

    clickTest(d: Date) {
        this.setState({ isShow: true });
        console.log(d);
    }

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        alert('提交的名字: ' + this.state.value);
        event.preventDefault();
    }
}