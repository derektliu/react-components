
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {

    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}

var App = (props) => {console.log(props); return (
  <div> 
  <h2> Grocery List </h2>
  <ul>
    {props.items.map(item => <GroceryListItem item={item} />)}
  </ul>
  </div>
);}


ReactDOM.render(<App items={['Apple', 'Orange']}/>, document.getElementById("app"));