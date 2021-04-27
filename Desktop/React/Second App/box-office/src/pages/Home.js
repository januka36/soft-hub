/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

const renderResults = (results) => {
    if (results && results.length === 0){
        return(<div> No Result </div>)
    }
    if (results && results.length > 0) {
        return results[0].show ? (<ShowGrid data={results}/>)
         : (<ActorGrid data={results}/>);
    }

    return null;
}


const Home = () => {
    const[ input, setInput ] = useLastQuery();
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

    const onInputChange = useCallback(ev => {
        setInput(ev.target.value);
    },[setInput]);


    const onKeyDown = (ev) => {
        if(ev.keyCode === 13){
            // 13 is the code for enter button
            onSearch()
        }
    }

    const onRadioChange = useCallback(ev => {
        setSearchOption(ev.target.value);
    },[]);

    return(
        <MainPageLayout>
            <SearchInput type = "text" placeholder="Search for something" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
            <RadioInputsWrapper>
                <div>

                <CustomRadio 
                    label="Shows"
                    id="shows-search" value="shows" checked={isShowsSearch} onChange={onRadioChange}
                />    
                </div>

                <div>
                <CustomRadio 
                    label="Actors"
                    id="actors-search" value="people" checked={!isShowsSearch} onChange={onRadioChange}
                /> 
                </div>


            </RadioInputsWrapper>

            <SearchButtonWrapper>
            <button type="button" onClick={onSearch}>Search</button>
            </SearchButtonWrapper>
            {renderResults(results)}
        </MainPageLayout>
    )


}

export default Home;
