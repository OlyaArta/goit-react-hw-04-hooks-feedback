import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <>
        <div>
          {options.map((option) => {
            return (
              <button
                key={option}
                type="button"
                className={s.btn}
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
