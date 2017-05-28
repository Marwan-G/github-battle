import React from 'react';
import SelectLanguage from './selectedlanguage';

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
