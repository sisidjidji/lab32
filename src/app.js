import React from 'react';

import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body : null,
      header:null,
      statusCode : null,
    };
  }
setResults=(body,header,statusCode)=>{
  this.setState({
    Results:{
      statusCode,
      header,
      Body,
    }
  })
}
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
