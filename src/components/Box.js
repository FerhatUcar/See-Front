import React, { Fragment } from 'react';
import BoxTab from "./Tabs";

const Box = () => {
    const title = 'SEE FRONT';

    return (
        <Fragment>
            <div className="box">
                <h1>{title}</h1>
                <BoxTab />
            </div>
        </Fragment>
    );
};

export default Box;
