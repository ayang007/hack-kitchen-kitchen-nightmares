import React from "react";
import screenshot from "../img/gordon-ramsay-life.png"

export default function About() {
    //return null;

    return (
            <>
                <h1 class="titles">About Gordon Ramsay</h1>

                <img src={screenshot} width="100%" height="100%" alt="Wikipedia Page"/>
            </>
    );
};