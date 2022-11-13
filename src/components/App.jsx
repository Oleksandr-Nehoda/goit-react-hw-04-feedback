import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

function App () {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 

   const onLeaveFeedBack = event => {
    switch (event) {
      case 'good' : setGood(good + 1);
      break;
      case 'neutral' : setNeutral(neutral + 1);
      break;
      case 'bad' : setBad(bad + 1);
      break;
      default: break;
    }
  };

  const countTotalFeedback = good + neutral + bad;
  

  const countPositiveFeedbackPercentage =  Math.round((100 / countTotalFeedback) * good);

    const options = ['good', 'neutral', 'bad'];

    return (
      <div className={css.box}>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedBack}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }


export default App;
