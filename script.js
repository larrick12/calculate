// react component

// coded by Larrick

class PadKey extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", { className: "grid-cont " },
      React.createElement("button", {
        className: "btn btn-danger jumbo",
        id: "clear",
        onClick: this.props.handleDelete,
        onChange: this.props.keyCode }, "AC"),



      React.createElement("button", {
        className: "btn btn-warning",
        id: "clear",
        onClick: this.props.handleClear,
        onChange: this.props.keyCode }, "C"),



      React.createElement("button", {
        className: "btn btn-info",
        id: "divide",
        onClick: this.props.handleOperator,
        onChange: this.props.keyCode,
        value: "/" }, "\xF7"),



      React.createElement("button", {
        className: "btn btn-info",
        id: "multiply",
        onClick: this.props.handleOperator,
        onChange: this.props.keyCode,
        value: "*" }, "*"),




      React.createElement("button", {
        className: "btn btn-primary",
        id: "seven",
        onClick: this.props.handleChange,
        onChange: this.props.keyCode,
        value: "7" }, "7"),



      React.createElement("button", {
        className: "btn btn-primary",
        id: "eight",
        onClick: this.props.handleChange,
        onChange: this.props.keyCode,
        value: "8" }, "8"),



      React.createElement("button", {
        className: "btn btn-primary",
        id: "nine",
        onClick: this.props.handleChange,
        onChange: this.props.keyCode,
        value: "9" }, "9"),



      React.createElement("button", {
        className: "btn btn-info",
        id: "subtract",
        onClick: this.props.handleOperator,
        onChange: this.props.keyCode,
        value: "-" }, "\u2212"),



      React.createElement("button", {
        className: "btn btn-primary",
        id: "four",
        onClick: this.props.handleChange,
        onChange: this.props.keyCode,
        value: "4" }, "4"),



      React.createElement("button", {
        className: "btn btn-primary",
        id: "five",
        onClick: this.props.handleChange,
        onChange: this.props.keyCode,
        value: "5" }, "5"),



      React.createElement("button", {
        className: "btn btn-primary",
        id: "six",
        onClick: this.props.handleChange,
        onChange: this.props.keyCode,
        value: "6" }, "6"),



      React.createElement("button", {
        className: "btn btn-info",
        id: "add",
        onClick: this.props.handleOperator,
        onChange: this.props.keyCode,
        value: "+" }, "+"),



      React.createElement("button", {
        className: "btn btn-primary",
        id: "one",
        onClick: this.props.handleChange,
        onChange: this.props.keyCode,
        value: "1" }, "1"),



      React.createElement("button", {
        className: "btn btn-primary",
        id: "two",
        onClick: this.props.handleChange,
        onChange: this.props.keyCode,
        value: "2" }, "2"),



      React.createElement("button", {
        className: "btn btn-primary",
        id: "three",
        onClick: this.props.handleChange,
        onChange: this.props.keyCode,
        value: "3" }, "3"),




      React.createElement("button", {
        className: "btn btn-primary jumbo1",
        id: "zero",
        onClick: this.props.handleChange,
        onChange: this.props.keyCode,
        value: "0" }, "0"),



      React.createElement("button", {
        className: "btn btn-info",
        id: "decimal",
        onClick: this.props.handleDecimal,
        value: ".",
        onChange: this.props.keyCode }, "."),



      React.createElement("button", {
        className: "btn btn-success equals",
        id: "equals",
        onClick: this.props.handleEvaluate,
        onChange: this.props.keyCode }, "=")));





  }}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevOutput: "",
      currentOutput: "0",
      operator: "" };

    this.handleOperator = this.handleOperator.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
    this.handleMax = this.handleMax.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const preVal =
    this.state.currentOutput === "0" ?
    value :
    this.state.currentOutput + value;
    this.setState({
      currentOutput: preVal });

    if (this.state.currentOutput.length > 20) {
      this.handleMax();
    }
  }
  handleMax() {
    this.setState({
      currentOutput: "Limit Exceeded",
      prevOutput: this.state.currentOutput });

    setTimeout(() => {
      this.setState({
        currentOutput: this.state.prevOutput });

    }, 500);
  }
  handleClear() {
    const clear =
    this.state.currentOutput !== "0" ?
    this.state.currentOutput.length <= 1 ?
    "0" :
    this.state.currentOutput.slice(0, -1) :
    this.state.currentOutput;

    this.setState({
      currentOutput: clear,
      operator: "" });

  }
  handleDelete() {
    this.setState({
      currentOutput: "0",
      prevOutput: "",
      operator: "" });

  }
  handleDecimal() {
    const decimal = !this.state.currentOutput.includes(".") ?
    this.state.currentOutput + "." :
    this.state.currentOutput;
    const prevdecimal = !this.state.prevOutput.includes(".") ?
    "" :
    this.state.prevOutput;
    this.setState({
      currentOutput: decimal,
      prevOutput: prevdecimal });

  }

  handleOperator(e) {
    const value = e.target.value;
    const operator =
    this.state.currentOutput !== "0" ?
    this.state.currentOutput.match(/[1-9]\.(-?\d+)$/) ||
    this.state.currentOutput.match(/(-?\d+)$/) ?
    value :
    "" :
    this.state.currentOutput == "0" && this.state.prevOutput == "" ?
    "" :
    value;
    const prev =
    this.state.currentOutput !== "0" ?
    this.state.currentOutput.match(/[1-9]\.(-?\d+)$/) ||
    this.state.currentOutput.match(/(-?\d+)$/) ?
    this.state.currentOutput :
    "" :
    this.state.prevOutput;

    this.setState({
      currentOutput: "0",
      prevOutput: prev,
      operator: operator });

  }
  handleEvaluate(e) {
    const prev = this.state.prevOutput;
    const current = this.state.currentOutput;
    const operator = this.state.operator;

    const answer =
    prev !== "" && current !== "0" && operator !== "" ?
    operator == "/" ?
    parseFloat(prev) / parseFloat(current) :
    operator == "*" ?
    parseFloat(prev) * parseFloat(current) :
    operator == "+" ?
    parseFloat(prev) + parseFloat(current) :
    operator == "-" ?
    parseFloat(prev) - parseFloat(current) :
    "" :
    current;

    this.setState({
      currentOutput: answer.toString() });

  }

  render() {
    return (
      React.createElement("div", { className: "calculator" },
      React.createElement(Display, {
        display: this.state.prevOutput,
        output: this.state.currentOutput,
        operator: this.state.operator }),

      React.createElement(PadKey, {
        handleChange: this.handleChange,
        handleClear: this.handleClear,
        handleDelete: this.handleDelete,
        handleOperator: this.handleOperator,
        handleEvaluate: this.handleEvaluate,
        handleDecimal: this.handleDecimal,
        keyCode: this.handleKeyPress })));



  }}


class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", { className: "calculator-screen", id: "display" },
      React.createElement("p", { className: "prev" }, this.props.display),
      React.createElement("p", { className: "operator" }, this.props.operator),
      React.createElement("p", { className: "current" }, this.props.output)));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));