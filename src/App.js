import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';
import Card from './Card';
import { MainContainer, SearchInput } from './StyledApp';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }

    return (
        <MainContainer>
            <SearchInput type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
            {weather.main && <Card weather={weather} />}
        </MainContainer>
    );
}

export default App;