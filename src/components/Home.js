import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export default function Home(props) {
    // React.useEffect(() => {
    //     props.handlePage(!props.page)
    // }, [])
    console.log("in")
    return (
        <div>
            <Link to="/">Home</Link>
        </div>
    )
}