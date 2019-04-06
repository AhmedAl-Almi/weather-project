import React, { Component } from 'react';
import Navbar from './components/navbar';
import Fetch from './components/fetch';

import './App.css';

class App extends Component {

  state = {
    forecastday: null,
    status: false,
    day: 'false',
    city: null,
  }



  componentDidMount() {
    Fetch().then(data => {
      this.setState({ forecastday: data.forecast.forecastday });
    })
  }

  updateStatus = () => {
    this.setState({ status: true })
    console.log(this.state.status);
  }
  updateStatusWeek = () => {
    this.setState({ status: false })
    console.log(this.state.status);
  }

  onChange = (event) => {
    this.setState({ city: event.target.value });
  }


  render() {

    if (!this.state.forecastday) {
      return <div>loading..</div>
    }
    console.log(this.state.city);

    return (
      <div className="App">
        <input type='text' onChange={this.onChange}/>
        <input type='submit' onClick={this.updateStatus} value='this day' />
        <input type='submit' onClick={this.updateStatusWeek} value='this week' />
        <input type='submit' value='search' />

        {this.state.status ? <div className='thisDay'>
          <div className='maxwind_mph'>
            {this.state.forecastday[0].day.avghumidity}
          </div>

          <div className='maxwind_mph'>
            {this.state.forecastday[0].day.avgtemp_c}
          </div>

          <div className='maxwind_mph'>
            {this.state.forecastday[0].day.avgtemp_f}
          </div>

          <div className='maxwind_mph'>
            {this.state.forecastday[0].day.avgvis_km}
          </div>

          <div className='maxwind_mph'>
            {this.state.forecastday[0].day.maxwind_mph}
          </div>

        </div> :
          <div className='this week'> this week
          {this.state.forecastday.map(t => <Navbar temp={t} />)}
          </div>
        }


      </div>
    );
  }
}

export default App;
