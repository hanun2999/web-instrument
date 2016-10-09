import React from 'react';
import Rcslider from 'rc-slider-colored';

export default class OverToneSlidersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {amountOfOvertones: this.props.initalOvertonesAmount, overtoneGainArray: this.props.initialOvertoneGainArray};
    this.onOvertoneAmountChange = this.onOvertoneAmountChange.bind(this);
    this.onGainChange = this.onGainChange.bind(this);
  }
  onOvertoneAmountChange(value) {
    this.setState({amountOfOvertones: value});
    this.props.onOvertoneAmountChange(value);
  }
  onGainChange(overtoneIndex, gain) {
    var newOvertoneGainArray = this.state.overtoneGainArray;
    newOvertoneGainArray[overtoneIndex] = gain;
    this.setState({overtoneGainArray: newOvertoneGainArray});
    this.props.onOvertoneArrayChange(newOvertoneGainArray);
  }
  render() {
    var overtoneSliders = [];
    for (var i = 0; i < this.state.amountOfOvertones; i++) {
      overtoneSliders.push(
        <Rcslider id={'gain-control-' + i}
          min={0} max={100} defaultValue={this.state.overtoneGainArray[i]} key={i} onAfterChange={this.onGainChange.bind(this, i)}/>);
    }
    return(
      <div className="OvertToneSlidersContainer container column small-centered small-8">
        <b>Amount of overtones</b>
        <OverTonesAmountSlider onOvertoneChange={this.onOvertoneAmountChange}/>
        <b>Overtones</b>
        {overtoneSliders}
      </div>
    );
  }
}

var OverTonesAmountSlider = React.createClass({
  getInitialState: function() {
    return {amountOfOvertones: 10};
  },
  componentDidMount: function() {

  },
  onAmountChange: function(value) {
    this.setState({amountOfOvertones: value});
    this.props.onOvertoneChange(value);
  },
  render: function() {
    return(
      <Rcslider className="OverTonesAmountSlider" id="number-overtones-slider"
        min={0} max={25} defaultValue={this.state.amountOfOvertones} onAfterChange={this.onAmountChange}/>
    );
  }
});
