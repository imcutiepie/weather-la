import React from 'react';
import SearchBar from '../search-bar/searchBar';
import SearchResult from '../search-result/searchResult';
import './search.css';
import getWeather from '../../services/weather';
import sun from '../../assets/sun.png';

class Search extends React.Component {
  state = { query: '', weatherData: {}, historyData: [] };
  error = false;

  getWeather = (props) => {
    const query = props.location || props;

    this.setState({ isCityNotfound: false });

    getWeather(query).then((data) => {
      if (data) {
        this.setState({ query: query, weatherData: data });
        const existingData = JSON.parse(localStorage.getItem('history')) || [];
        const newData = {
          location: `${data.name}, ${data.sys.country}`,
          datetime: data.dt,
          id: Date.now()
        };

        if (!existingData) {
          localStorage.setItem('history', JSON.stringify(newData));
          this.setState({ history: JSON.stringify(newData) });
        } else {
          const updatedData = [newData, ...existingData];

          if (updatedData.length > 5) { //Limit to 5 
            updatedData.pop(); // Remove the oldest item
          }

          localStorage.setItem('history', JSON.stringify(updatedData));
          this.setState({ history: JSON.stringify(updatedData) });
        }

        const historyList = JSON.parse(localStorage.getItem('history') || {});
        this.setState({ historyList: historyList });
      } else {
        this.setState({ isCityNotfound: true, weatherData: {} });
      }
    });
  };

  deleteRecord = (id) => {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    const updatedHistory = history.filter(
      (item) =>
        item.id !== id
    );

    localStorage.setItem('history', JSON.stringify(updatedHistory));
    this.setState({ historyList: updatedHistory });
  };

  render() {
    return (
      <div className='search-page'>
        <SearchBar onSearch={this.getWeather} />
        {this.state.isCityNotfound && (
          <div className='errorAlert bold-text'>
            City/ Country name not found.
          </div>
        )}
        <img src={sun} alt='weather-icon'></img>
        <SearchResult
          weatherData={this.state.weatherData}
          historyList={this.state.historyList}
          searchAgain={this.getWeather}
          deleteRecord={this.deleteRecord}
        />
      </div>
    );
  }
}

export default Search;
