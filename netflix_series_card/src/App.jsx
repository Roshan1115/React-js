import React from 'react';
import Card from './Card'
import './App.css'
import SeriesData from './DataArray'

const App = () => {
    return (
        <>
        <h1>TOP NETFLIX SERIES TO WATCH</h1>
        <div className="container">
            <div className="card-container">
                {SeriesData.map( (val) => {
                    return (
                    <Card
                    key = {val.id}
                    SeriesName= {val.SeriesName} 
                    ImageLink= {val.ImageLink}
                    AboutSeries= {val.AboutSeries}
                    SeriesLink= {val.SeriesLink}
                    DownloadLink= {val.DownloadLink}
                />
                    )
                })}
            </div>
        </div>
    </>
        )
            };

export default App;