import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {
    state = {
        data : {},
        country: ''
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data : fetchedData })
    }
    
    handleCountryChange = async (country) => {
        //fetch data 
        //then set state
        //console.log(country)
        const fetchedData = await fetchData(country);
        this.setState({ data : fetchedData ,
                       country: country
                       })
        console.log(fetchedData);
    }
    render(){
        const {data ,country} = this.state
        return(
            <div className={styles.container}>
            <h1 style={{textAlign:"center",backgroundColor:"black"}} >
            <span style={{color:"ivory",}}>COVID</span><span style={{color:"grey"}}>-19</span>
            </h1> 
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange} />                       
            <Chart data={data} country={country} />
            </div>
        );
    }
};

export default App;