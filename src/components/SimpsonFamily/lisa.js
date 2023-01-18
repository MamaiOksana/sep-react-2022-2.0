import React from "react";

export const Lisa = () => {
    const url = 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png';
    return (
        <div className="Simpson">
            <h3>Lisa Simpson</h3>
            <p>Lisa Marie Simpson[1] is a fictional character in the animated television series The Simpsons. She is the
                middle child and most accomplished of the Simpson family. Voiced by Yeardley Smith, Lisa was born as a
                character in The Tracey Ullman Show short "Good Night" on April 19, 1987. Cartoonist Matt Groening created
                and designed her while waiting to meet James L. Brooks. Groening had been invited to pitch a series of
                shorts based on his comic Life in Hell, but instead decided to create a new set of characters. He named
                the older Simpson daughter after his younger sister Lisa Groening Bartlett. After appearing on The Tracey
                Ullman Show for three years, the Simpson family were moved to their own series on Fox, which debuted on
                December 17, 1989.</p>
            <img src={url}/>
        </div>
    )
}