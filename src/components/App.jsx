import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 0,
  };

  onLeaveFeedBack = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((100 / this.countTotalFeedback()) * this.state.good);
  }

  render() {
    const { good, neutral, bad } = this.state;
    console.log();
    return (
      <div>
        <section>
          <h1>Please leave your feedback</h1>
          <div>
            <button onClick={this.onLeaveFeedBack}>Good</button>
            <button>Neutral</button>
            <button>Bad</button>
          </div>
        </section>
        <section>
          <h2>Statistics</h2>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </section>
      </div>
    );
  }
}

export default App;
