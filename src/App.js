import { useState } from "react";
import Statistics from "./component/Statistics/Statistics";
import Notification from "./component/Notification/Notification";
import Section from "./component/Section/Section";
import Feedback from "./component/Feedback/Feedback";
import Container from "./component/Container/Container";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ["good", "neutral", "bad"];

  const handleClick = (option) => {
    switch (option) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <Feedback options={options} onLeaveFeedback={handleClick} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
}

export default App;

//////////////////////////////////before hooks//////////////////////////
// import React from "react";
// import Statistics from "./component/Statistics/Statistics";
// import Notification from "./component/Notification/Notification";
// import Section from "./component/Section/Section";
// import Feedback from "./component/Feedback/Feedback";
// import Container from "./component/Container/Container";

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   // handleGoodIncrement = () => {
//   //   this.setState((prevState) => ({
//   //     good: prevState.good + 1,
//   //   }));
//   // };
//   // handleNeutralIncrement = () => {
//   //   this.setState((prevState) => ({
//   //     neutral: prevState.neutral + 1,
//   //   }));
//   // };
//   // handleBadIncrement = () => {
//   //   this.setState((prevState) => ({
//   //     bad: prevState.bad + 1,
//   //   }));
//   // };

//   onLeaveFeedback = (option) => {
//     this.setState((prevState) => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback = () =>
//     this.state.good + this.state.neutral + this.state.bad;

//   countPositiveFeedbackPercentage = () =>
//     Math.round((this.state.good / this.countTotalFeedback()) * 100);

//   render() {
//     const total = this.countTotalFeedback();
//     const positivePer = this.countPositiveFeedbackPercentage();
//     const { good, neutral, bad } = this.state;
//     const keys = Object.keys(this.state);

//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <Feedback options={keys} onLeaveFeedback={this.onLeaveFeedback} />
//         </Section>

//         <Section title="Statistics">
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePer}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }

// export default App;
