
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var onListItemClick = (event) => {
      console.log('event', event);
      console.log(this.props.item, "clicked");
    };

    return (
      <li onClick={onListItemClick}>{this.props.item}</li>
    );
  }

};


var App = (props) => (
  <div> 
  <h2> Grocery List </h2>
  <ul>
    {props.items.map(item => <GroceryListItem item={item} />)}
  </ul>
  </div>
);


ReactDOM.render(<App items={['Apple', 'Orange']}/>, document.getElementById("app"));