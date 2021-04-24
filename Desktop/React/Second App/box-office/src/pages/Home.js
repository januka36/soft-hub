import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from '../misc/config';


const Home = () => {
    const[ input, setInput ] = useState('');
    const[ results, setResults ] = useState(null);
    const [ searchOptions, setSearchOption ] = useState('shows');

    const isShowsSearch = searchOptions === 'shows';

    const onSearch = () => {

        apiGet(`/search/${searchOptions}?q=${input}`).then(result => {
            setResults(result);
        })
        // http://api.tvmaze.com/search/shows?q=girls
        // eslint-disable-next-line
    };


    const onInputChange = (ev) => {
        // eslint-disable-next-line
        setInput(ev.target.value);
    };


    const onKeyDown = (ev) => {
        if(ev.keyCode === 13){
            // 13 is the code for enter button
            onSearch()
        }
    }

    const onRadioChange = ev => {
        setSearchOption(ev.target.value);
    }

    const renderResults = () => {
        if (results && results.length === 0){
            return(<div> No Result </div>)
        }
        if (results && results.length > 0) {
            return results[0].show ? (<ShowGrid data={results}/>)
             : (<ActorGrid data={results}/>);
        }

        return null;
    }



    return(
        <MainPageLayout>
            <input type = "text" placeholder="Search for something" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
            <div>
                <label htmlFor="shows-search">
                    Shows
                    <input id="shows-search" type="radio" value="shows" checked={isShowsSearch} onChange={onRadioChange} />
                </label>

                <label htmlFor="actors-search">
                    Actors
                    <input id="actors-search" type="radio" value="people" checked={!isShowsSearch} onChange={onRadioChange}/>
                </label>


            </div>
            <button type="button" onClick={onSearch}>Search</button>
            {renderResults()}
        </MainPageLayout>
    )


}

export default Home;
