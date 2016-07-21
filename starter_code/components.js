class Image extends React.Component{
  constructor(){
    super();
    this.state = { image: "http://cdn2.business2community.com/wp-content/uploads/2016/01/QA-Danny-DeVito-008.jpg" }
  }
  _handleClick() {
    if (this.state.image) {
      this.setState({ image: !this.state.image });
    } else {
      this.setState({ image: this.state.image });
    }
  }
  render(){
    return(
      <div>
        <img src= { this.state.image } />
        <Button />
      </div>
    )
  }
}


class Button extends React.Component{
  render(){
    return(
      <div>
        <button type="button" onClick={ this._handleClick.bind(this) }>Toggle Image</button>
      </div>
    )
  }
}


ReactDOM.render(<Image />, document.getElementById('app-container'));
