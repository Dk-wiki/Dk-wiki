import React from 'react';
import { useParams } from 'react-router-dom';
import TheExecutioner from './TheExecutioner';
import Ajax from './Ajax';
import Gluttonite from './Gluttonite';

const entryComponents = {
    "The_Executioner": TheExecutioner,
    "Ajax": Ajax,
    "Gluttonite": Gluttonite,
};

const Entry = () => {
    let { id } = useParams();
    const Component = entryComponents[id];

    return (
        <div className="flex justify-center pb-10">
            <div className="max-w-6xl w-full">
            {Component ? (
                <Component />
            ) : (
                <>
                <h1 className="flex justify-center items-center text-4xl mt-5 mb-7">Entry not found</h1>
                <a className="text-1xl" href="#/entries">Return to entry list</a>
                </>
            )}
            </div>
        </div>
    );
}

export default Entry;
