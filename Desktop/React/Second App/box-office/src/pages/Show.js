import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { initialize } from 'workbox-google-analytics';
import { apiGet } from '../misc/config';



const reducer = (prevState, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS' : {
            return {isLoading: false, error: null, show:action.show};
        }

        case 'FETCH_FAILED' : {
            return { ...prevState, isLoading: false, error: action.error};
        }

        default: return(prevState)
    };
}
// eslint-disable-next-line
const initialState = {
    show: null,
    isLoading: true,
    error: null,
};

const Show = () => {
 
    const { id } = useParams();
    // eslint-disable-next-line
    const [{ show,isLoading,error },dispatch] = useReducer(reducer,initialize);
  
    useEffect( ()=> {

        let isMounted = true;

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
            
                if (isMounted){
                    dispatch( {type: 'FETCH_SUCCESS', show: results})
                }  
            }) 
        .catch(err => {
            if (isMounted){
                dispatch( {type: 'FETCH_FAILED', error: err.messege})
            }
        });

        return () => {
            isMounted = false;
        }
    }, [id])

    if(isLoading){
        return <div>Data is being loaded</div>
    };

    if(error){
        return <div>Error Occured : {error}</div>
    }
    
    return (<div>This is show page</div>
    );
}

export default Show
