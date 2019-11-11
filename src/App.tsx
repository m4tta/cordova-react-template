import React from 'react';

const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment);
  }
  return <button onClick={handleClick}>+{increment}</button>
}

interface IProps {
}

interface IState {
  count?: number;
}

class App extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }

    this.incrementCount = this.incrementCount.bind(this);
  }

  
  incrementCount(increment) {
    this.setState((state) => {
      return {count: state.count + increment};
    });
  }

  render() {
    return (
      <div>
        <Button increment={1} onClickFunction={this.incrementCount} />
        <Button increment={10} onClickFunction={this.incrementCount} />
        <Button increment={100} onClickFunction={this.incrementCount} />
        <Button increment={1000} onClickFunction={this.incrementCount} />
        <span>{this.state.count}</span>
      </div>
    )
  }
}

export default App;
