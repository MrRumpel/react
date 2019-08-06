import * as React from 'react';



interface WelcomeProps {
    name: string
}

interface WelcomeState {
    date: Date;
    isShow: boolean;
}

export default class Welcome extends React.Component<WelcomeProps, WelcomeState> {
    timerID!: NodeJS.Timeout;
    listItems: JSX.Element[];
    numbers = [1, 2, 3, 4, 5];
    constructor(props: Readonly<WelcomeProps>) {
        super(props);
        this.state = { date: new Date(), isShow: false };
        this.listItems = this.numbers.map((number) => <li key={number.toString()}>{number}</li>);
    }

    render() {
        return <h1>
            Hello, {this.state.date.toLocaleTimeString()}
            <br />
            <button onClick={() => this.clickTest(this.state.date)}>click me</button>
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
}