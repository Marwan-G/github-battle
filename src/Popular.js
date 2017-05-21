import React, {Component} from 'react';
class Popular extends React.Component{
constructor(props){
  super(props);
  this.state={
    selectedLaanguage: 'All'
  }
}
  render(){
    var languages = ['All', 'JavaScript','Ruby', 'Java', 'CSS', 'Python'];
    return(

        <ul className="languages">
          {languages.map((lang) => {
            return(
              <li key={lang}>{lang}</li>
            )
            })
         }
        </ul>

    )
  }}
export default Popular;
