const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
<div id="challenge-node"></div>
ReactDOM.render(JSX, document.getElementById("challenge-node"));

// <!--difference in naming convention-->

const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);


class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // change code below this line
      return (<div>
        <h1>Hello React!</h1>
      </div>);
  
      // change code above this line
    }
  };

  // <!--Creating component with composition-->

  const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* change code below this line */ }
          <ChildComponent/>
          { /* change code above this line */ }
        </div>
      );
    }
  };

  // <!--Nested Components-->
  const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* change code below this line */ }
        <TypesOfFruit/>
        { /* change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* change code below this line */ }
          <Fruits/>
          { /* change code above this line */ }
        </div>
      );
    }
  };

  // <!--Compose react components-->

  class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* change code below this line */ }
          <NonCitrus/>
          <Citrus/>
          { /* change code above this line */ }
        </div>
      );
    }
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* change code below this line */ }
          <Fruits/>
          { /* change code above this line */ }
          <Vegetables />
        </div>
      );
    }
  };


const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* change code above this line */ }
    </div>
  );
};

// <!--Pass Props to a Stateless Functional Component-->

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date={Date()} />
        { /* change code above this line */ }
      </div>
    );
  }
};

// <!--Pass an array as props-->
const List= (props) => { { /* change code below this line */ } return
<p>{props.tasks.join(', ')}</p>
{ /* change code above this line */ } }; 

class ToDo extends React.Component { constructor(props) { super(props); } render()
{ return (
<div>
  <h1>To Do Lists</h1>
  <h2>Today</h2>
  { /* change code below this line */ }
  <List tasks={[ "walk", "dog"]}/>
  <h2>Tomorrow</h2>
  <List tasks={[ "walk", "dog", "workout"]}/> { /* change code above this line */ }
</div>
); } };

// <!--Use default props-->
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// change code below this line
ShoppingCart.defaultProps = {
  items: 0
}

// <!--Override default props-->

const Items = (props) => { return
  <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}
  
Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* change code below this line */ }
    return <Items quantity={10}/>
    { /* change code above this line */ }
  }
};

// <!--Use PropTypes to define the prop you expect-->


// change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
// change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
  super(props);
}

render() {
  return <Items />
  }
};

// <!--Access props using this.props-->

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
    { /* change code below this line */ }
    <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
    { /* change code above this line */ }
    </div>
    );
  }
};
  
class ResetPassword extends React.Component {
    constructor(props) {
      super(props);
    
    }
    render() {
      return (
        <div>
        <h2>Reset Password</h2>
        <h3>We've generated a new temporary password for you.</h3>
        <h3>Please reset this password from your account settings ASAP.</h3>
        { /* change code below this line */ }
        <ReturnTempPassword tempPassword={"password"}/>
        { /* change code above this line */ }
        </div>
      );
    }
};