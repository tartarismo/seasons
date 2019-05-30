import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';

class App extends React.Component {
    constructor(props) {
        super(props);
        //1° modo per inizializzare lo state
        /*
        this.state = {
            lat: null,
            errorMessage: ''
        };
        */
    }
    //2° modo per inizializzare lo state
    // metodo abbrieviato che Babel trasforma come sopra
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                // to update the obj we call setState!
                this.setState({ lat: position.coords.latitude});
                //we did not!!
                //this.state.lat = position.coords.latitude <- NO
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );
        console.log('Mounted');
        // è il punto migliore per mettere il dataloading dei dati
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Updated state');
        // posto migliore dove mettere il dataloading a seguito di un cambiamento dello state o delle props. Perchè viene invocato
        // ogni volta che viene eseguito il metodo render()
    }

    renderContent(){
        if(!this.state.lat && this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat} />
            //return <div>Latitude: {this.state.lat}</div>
        }
        return <Spinner message="Please accept location request" />

        //return(
        //    <SeasonDisplay />
        //)
    }

    //React says we have to define render!!!!!!
    render() {
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )

    }
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);