import React from  'react';
import PropTypes from 'prop-types';
 const SelectLanguage = (props) => {
  var languages = ['All', 'JavaScript','Ruby', 'Java', 'CSS', 'Python'];
  return(
    <ul className="languages">
      {languages.map((lang)=>{
        return(
        <li
          style={lang === props.selectedLanguage ? { color: '#d0021b'} : null}
          onClick={props.updateSelected.bind(this,lang)}
          key={lang}>
          {lang}
        </li>

      )
    })}

    </ul>
  )
}
SelectLanguage.PropTypes={
  selectedLanguage:PropTypes.string.isRequired,
  updateSelected:PropTypes.func.isRequired
};

class Popular extends React.Component{
  constructor(props){
    super();
    this.state={
      selectedLanguage:"All"
    };
  }
  updateSelected(lang) {
    this.setState(() => {
      return{
       selectedLanguage:lang
      }
    });
  }
    render(){
      //console.log("up here ", this)
      return(
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          updateSelected={this.updateSelected.bind(this)} />
      </div>
      );
    }
}
export default Popular;
