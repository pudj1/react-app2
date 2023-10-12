import React from 'react';

function Body(props) {
    return <main className={"container"}>{props.children}</main>;
}

export default Body;