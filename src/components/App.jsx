import { GlobalStyle } from 'components/GlobalStyle';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = type => {
    switch (type) {
      case 'good':
        setGood(state => state + 1);
        break;
      
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      
      case 'bad':
        setBad(state => state + 1);
        break;
      
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  
  const countPositiveFeedbackPercentage = (total) => {
     let percentage = good / total * 100;
     if (!percentage) {
       percentage = 0;
     }
     return parseInt(percentage);
   }

  return <div>
         <GlobalStyle />
         <Section title='Please leave feedback'>
           <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={addFeedback}/>
           {countTotalFeedback() > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} onTotal={countTotalFeedback()} onCheckPercentage={countPositiveFeedbackPercentage(countTotalFeedback())}/>) : <Notification message="There is no feedback" />}
         </Section >
       </div>
}

