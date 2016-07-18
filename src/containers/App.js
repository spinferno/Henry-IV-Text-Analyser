import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/CounterActions';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export default class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { counter, actions } = this.props;


// Placeholder values for graph
var chartData = {
    "datasets": [{
        "label" : "Anger",
        "data": [
            "0.324343",
            "0.489766",
            "0.325268",
            "0.234534",
            "0.485745"],
            "pointStrokeColor": "#fff",
            "fillColor": "rgba(220,220,220,0.5)",
            "pointColor": "rgba(220,220,220,1)",
            "strokeColor": "rgba(220,220,220,1)"
    },
      {
        "label" : "Disgust",
        "data": [
            "0.34565",
            "0.12314",
            "0.25268",
            "0.34534",
            "0.25745"],
            "pointStrokeColor": "#fff",
            "fillColor": "rgba(220,220,220,0.5)",
            "pointColor": "rgba(220,220,220,1)",
            "strokeColor": "rgba(220,220,220,1)"
    },
      {
        "label" : "Fear",
        "data": [
            "0.23565",
            "0.42314",
            "0.13468",
            "0.14534",
            "0.45745"],
            "pointStrokeColor": "#fff",
            "fillColor": "rgba(220,220,220,0.5)",
            "pointColor": "rgba(220,220,220,1)",
            "strokeColor": "rgba(220,220,220,1)"
    },
      {
        "label" : "Joy",
        "data": [
            "0.14565",
            "0.32314",
            "0.15268",
            "0.46564",
            "0.15745"],
            "pointStrokeColor": "#fff",
            "fillColor": "rgba(220,220,220,0.5)",
            "pointColor": "rgba(220,220,220,1)",
            "strokeColor": "rgba(220,220,220,1)"
    },
      {
        "label" : "Sadness",
        "data": [
            "0.24565",
            "0.32314",
            "0.4268",
            "0.44534",
            "0.25745"],
            "pointStrokeColor": "#fff",
            "fillColor": "rgba(220,220,220,0.5)",
            "pointColor": "rgba(220,220,220,1)",
            "strokeColor": "rgba(220,220,220,1)"
    }
    ],
        "labels": [
        "Line 4",
        "Line 5",
        "Line 6",
        "Line 7",
        "Line 8"]
};

var chartOptions = {}
//var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData);


var LineChart = require("react-chartjs").Line;


var EmotionGraph = React.createClass({
  render: function() {
    return <LineChart data={chartData} options={chartOptions} width="800" height="200"/>
  }
});

var PlayLines = React.createClass({
  getInitialState: function() {
    return {
      line_id: '',
      text_entry: ''
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var currentLine = result[20];
      this.setState({
        line_id: currentLine.line_id,
        text_entry: currentLine.text_entry
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
       line: {this.state.line_id}<br/>
       text: {this.state.text_entry}
       
      </div>
    );
    ////{JSON.stringify(chartData, null, 2) }
  }
});



//<PlayLines source="http://www.spinferno.com/wp-content/uploads/henry_iv.json" />


    return (
      <div className="main-app-container">
        <Sidebar />
        <div id="booknav">
          <div className="iconheading">
            <div className="iconcover">
              <image src="http://www.spinferno.com/wp-content/uploads/bookicon.png" height="113" width="87" />
            </div>            
            <div className="icontitle">Henry IV</div>
          </div>
          <image src="http://www.spinferno.com/wp-content/uploads/progresssslider.png" height="517" width="191" /> 
        </div>

        <div id="radarchart">
          <image src="http://www.spinferno.com/wp-content/uploads/radarchart2.png" height="282" width="354" />
        </div>  

        <div className="playtext">
          KING HENRY IV<br />
          So shaken as we are, so wan with care,<br />
          Find we a time for frighted peace to pant,<br />
          And breathe short-winded accents of new broils<br />
          To be commenced in strands afar remote.<br />
          No more the thirsty entrance of this soil<br />
          Shall daub her lips with her own childrens blood<br />
          Nor more shall trenching war channel her fields,<br />
          Nor bruise her flowerets with the armed hoofs<br />
          Of hostile paces: those opposed eyes,<br />
          Which, like the meteors of a troubled heaven,<br />
          All of one nature, of one substance bred,<br />
          Did lately meet in the intestine shock
        </div>

        <div id="chartContainer">
          <EmotionGraph />
        </div>

        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
