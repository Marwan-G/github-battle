import React, {Component} from 'react';
class Popular extends React.Component{
constructor(props){
  super(props);
  this.state={
    selectedLanguage: 'All'
  };
}
  updatedLanguage(lang){
    this.setState(function(){
      return {
        selectedLanguage:lang
      }
    });
  }
  render(){
    var languages = ['All', 'JavaScript','Ruby', 'Java', 'CSS', 'Python'];
    console.log("up here ", this)
    return(
        <ul className="languages">
            <p>selectedLanguage is {this.state.selectedLanguage}</p>
          {languages.map((lang) => { console.log("down her", this)
            return(
              <li key={lang} onClick={this.updatedLanguage.bind(this,lang)}>{lang}</li>
            )
            })
         }
        </ul>

    )
  }}
export default Popular;
