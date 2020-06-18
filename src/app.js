import React from 'react';

import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/result';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Results:{
      body : null,
      header:null,
      statusCode : null,

      },
    };
  }


setResults=(body,header,statusCode)=>{
  this.setState({
    Results:{
      body,
      header,
      statusCode,
     
    }
  })
}
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form onReceiveResults={this.setResults}/>
        <Results body={this.state.Results}/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
