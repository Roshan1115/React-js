import React from 'react';
import './Card.css'
// let my_button = {}

function ButtonCustom(props){
    return(
        <>
        <a href={props.Btn_link} target="_blank" rel="noreferrer">
            <button>{props.text}</button>
        </a>
        </>
    )
}

function Card(props){
    return(
        <>
        <div className='Card'>
            <a href={props.SeriesLink} target="_blank" rel="noreferrer">
            <img src={props.ImageLink} alt="Source Link"/>
            </a>
            <div className="content">
                <div className="text-holder">
                    <h2 className="seriesName">{props.SeriesName}</h2>
                    <p>{props.AboutSeries}</p>
                </div>
                <div className="btn-holder">
                    <ButtonCustom Btn_link={props.SeriesLink}
                        text="Watch Now"
                    />
                    <ButtonCustom Btn_link={props.DownloadLink}
                        text="Download"
                    />
                </div>
            </div>
        </div>
        </>
    )
}



export default Card;