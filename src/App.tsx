import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {
  count_action_creators,
  count_action_creators_type,
} from "./actions/count";

interface IProps {
  count: { value: number };
  count_action_creators: count_action_creators_type;
}

class PureApp extends React.Component<IProps> {
  render() {
    const { count, count_action_creators } = this.props;
    return (
      <>
        <div>count:{count.value}</div>
        <button onClick={() => count_action_creators.increment()}>+1</button>
        <button onClick={() => count_action_creators.decrement()}>-1</button>
      </>
    );
  }
}

function mapStateToProps(state: { count: { value: number } }) {
  return { count: state.count };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    count_action_creators: bindActionCreators(count_action_creators, dispatch),
  };
}

export const App = connect(mapStateToProps, mapDispatchToProps)(PureApp);
