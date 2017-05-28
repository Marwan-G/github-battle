var React = require ('react');
var ReactDom = require ('react-dom');
require('./index.css');

//state
// lifecycle event
//UI
class App extendes React.Component{
  render(){
    return(
      <div>
        Hello World!
      </div>
    )
  }
}
RectDom.render(<App />,document.getElementById('app'));
