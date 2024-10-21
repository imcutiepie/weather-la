import React from 'react';
import './searchResult.css';
import SearchHistory from './searchHistory';
import { Row, Col } from 'react-bootstrap';
import { formatDateTime, appendDegreeSymbol } from '../../utils/helper';

function SearchResult(props) {
  const weatherData = props.weatherData || {};

  const isWeatherDataEmpty = (data) => {
    return Object.keys(data).length === 0;
  };

  const getMinMaxTemp = () => {
    const min = appendDegreeSymbol(weatherData.main?.temp_min);
    const max = appendDegreeSymbol(weatherData.main?.temp_max);

    return `H: ${min} L: ${max} `;
  };




  return (
    <div className='search-result'>
      <div className='today-weather left'>
        <p className='text black-text m-0'> Today's Weather</p>
        {isWeatherDataEmpty(weatherData) ? (
          <p className='text grey-text'>No weather data available.</p>
        ) : (
          <Row className='full-width'>
            <Col md='4' sm='4' xs='6' className='text black-text m-0'>
              <h1 className='purple-text bold x-large-text m-0'>
                {appendDegreeSymbol(weatherData.main?.temp)}
              </h1>
              <p className='text black-text m-0'>{getMinMaxTemp()}</p>
              <p className='text bold grey-text m-0'>
                {weatherData.name}, {weatherData.sys?.country}
              </p>
            </Col>

            <Col md='8' sm='8' xs='6' className='responsive-side d-flex text-end'>
            <Row>
            <span className='text grey-text small-text col-xs-4 col-md-4'>
                {formatDateTime(weatherData.dt)}
              </span>
              <span className='text grey-text small-text col-xs-4 col-md-4'>
                Humidity: {weatherData.main?.humidity}%
              </span>
              <span className='text grey-text small-text col-xs-4 col-md-4'>
                {weatherData?.weather[0]?.main}
              </span>
            </Row>
             
            </Col>
          </Row>
        )}
      </div>
      <SearchHistory
        historyList={props.historyList}
        searchAgain={props.searchAgain}
        deleteRecord={props.deleteRecord}
      />
    </div>
  );
}

export default SearchResult;
