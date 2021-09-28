import React, { Component } from "react";
import Navbar from "./component/Navbar";
import LoadingBar from 'react-top-loading-bar';
import NewsList from "./component/NewsList";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

export default class App extends Component {
  apikey='8340763cff6e4b298bff2be8f7d1eedf'
  state={progress:0}
   setProgress=(progress)=>{
    this.setState({progress:progress})
   }
  render() {
    return (
      <div >
        <Router>
          <Navbar/>
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
 
      />
          
          <Switch>
          <Route exact path="/"> <NewsList setProgress={this.setProgress}  apikey={this.apikey} key='general' pageSize={10} category='general' /></Route>  
           <Route exact path="/science"> <NewsList setProgress={this.setProgress}  apikey={this.apikey} key='science' pageSize={10} category='science' /></Route>  
           <Route exact path="/general"> <NewsList setProgress={this.setProgress}  apikey={this.apikey} key='general' pageSize={10} category='general' /></Route>  
           <Route exact path="/sports"> <NewsList setProgress={this.setProgress}  apikey={this.apikey} key='sports' pageSize={10} category='sports' /></Route>  
           <Route exact path="/entertainment"> <NewsList setProgress={this.setProgress}  apikey={this.apikey} key='entertainment' pageSize={10} category='entertainment' /></Route>  
           <Route exact path="/health"> <NewsList setProgress={this.setProgress}  apikey={this.apikey} key='health' pageSize={10} category='health' /></Route>  
           <Route exact path="/technology"> <NewsList setProgress={this.setProgress}  apikey={this.apikey} key='technology' pageSize={10} category='technology' /></Route>  
           <Route exact path="/business"> <NewsList setProgress={this.setProgress}  apikey={this.apikey} key='business' pageSize={10} category='business' /></Route>  
            
          
          </Switch>
           </Router>
        
      </div>
    );
  }
}
