import React from 'react';
import Spinner from  './Spinner.js'

const Card = ({loadingData, showData, weather, forecast }) =>{

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() +1;
    let year = today.getFullYear();
    let date = `${day}/${month}/${year}`;

    let url = '';
    let iconUrl = ''
    if(loadingData){
        return <Spinner />
    }
    if(showData){
        url = 'http://openweathermap.org/img/w/'
        iconUrl =  url + weather.weather[0].icon + '.png';
  }
    return (
        <div className='mt-5'>
            {
                showData === true ? (
                    <div className='container'>
                        <div className='card mb-3 mx-auto bg-dark text-light'>
                            <div className='row g-0'>
                                <div className='col-md-4'>
                                    <h3 className='card-title'>
                                        {weather.name}
                                    </h3>
                                    <p className='card-date'>
                                        {date}
                                    </p>
                                    <h1 className='card-temp'>
                                        {(weather.main.temp - 273.15).toFixed(1)}ºC
                                    </h1>
                                    <p className='card-desc'>
                                        <img src={iconUrl} alt=''/>
                                        {weather.weather[0].description}
                                    </p>
                                <img src='https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg' alt='city' className='img-fluid rounded-start'/>
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body text-start mt-2'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    <h2 className='text-light'>
                        Sin Datos
                    </h2>
                )
            }
        </div>
    )
}

export default Card;