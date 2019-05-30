import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Fa caldo. Andiamo al mare?',
        iconName: 'sun'
    },
    winter: {
        text:'Hey fa un bel freddo!',
        iconName: 'snowflake'
    },
    spring: {
        text:'È primavera! Ci sono gli uccellini',
        iconName: 'earlybirds'
    },
    autumn: {
        text:'Stanno cadendo tutte le foglie. Ci sono le castagne! (Ma anche a San Paolo?)',
        iconName: 'tree'
    }
};

const getSeason = (lat, day, month) => {
    if (month > 1 && month <= 4){
        return lat > 0 ? 'spring' : 'autumn';
    } else if(month > 4 && month <= 7){
        return lat > 0 ? 'summer' : 'winter';
    } else if(month > 10 && month <= 1){
        return lat > 0 ? 'winter' : 'summer';
    } else {
        return lat > 0 ? 'autumn' : 'spring';
    }
};

const SeasonDisplay = (props) => {
    console.log(props.lat);
    const season = getSeason(props.lat, new Date().getDay(), new Date().getMonth());
    const {text,iconName} =  seasonConfig[season];

    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
};

export default SeasonDisplay;