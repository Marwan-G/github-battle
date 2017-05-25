import React, {Component} from 'react';
class Popular extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedLanguage:"All"
    };
  }
  updateSelected(lang) {
    this.setState(() => {
      return{
       selectedLanguage:lang
      }
    })
  }
    render(){
      var languages = ['All', 'JavaScript','Ruby', 'Java', 'CSS', 'Python'];
      //console.log("up here ", this)
      return(
          <ul className="languages">
            {languages.map((lang)=>{
              return(
              <li
                style={lang === this.state.selectedLanguage ? { color: '#d0021b'} : null}
                key={lang}
                onClick={this.updateSelected.bind(this,lang)}>
                {lang}
              </li>
            )
          })}
            <p> selectedLanguage is {this.state.selectedLanguage}</p>
          </ul>

      );
    }
}
export default Popular;
