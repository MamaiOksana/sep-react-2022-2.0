import React from 'react';

export const Maggie = () => {
    const url = 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'

    return (
        <div className="Simpson">
            <h3>Maggie Simpson</h3>
            <p>Margaret Evelyn Lenny "Maggie" Simpson[1][2] is a fictional character in the animated television series
                The Simpsons and a part of the Simpson family, notably the youngest member. She first appeared on
                television in the Tracey Ullman Show short "Good Night" on April 19, 1987. Maggie was created and
                designed by cartoonist Matt Groening while he was waiting in the lobby of James L. Brooks' office. She
                received her first name from Groening's youngest sister. After appearing on The Tracey Ullman Show for
                three years, the Simpson family was given their own series on the Fox Broadcasting Company which debuted
                December 17, 1989.</p>
            <img src={url}/>
        </div>
    )
}