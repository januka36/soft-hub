import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import {apiGet} from '../misc/config';


const Home = () => {
    const[ input, setInput ] = useState('');
    const[ results, setResults ] = useState(null);

    const onSearch = () => {

        apiGet(`/search/shows?q=${input}`).then(result => {
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
    const renderResults = () => {
        if (results && results.length === 0){
            return(<div> No Result </div>)
        }
        if (results && results.length > 0) {
            return(<div>{results.map(item => (
                <div key={item.show.id}>{item.show.name}</div>
            ))}
            </div>
            );

        }

        return null;
    }



    return(
        <MainPageLayout>
            <input type = "text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
            <button type="button" onClick={onSearch}>Search</button>
            {renderResults()}
        </MainPageLayout>
    )


}

export default Home;
