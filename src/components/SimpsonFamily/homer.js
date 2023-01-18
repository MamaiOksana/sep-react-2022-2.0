import React from "react";

export const Homer = () => {
    const url = 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'

    return(
        <div className="Simpson">
            <h3>Homer Simpson</h3>
            <p> Homer Jay Simpson is a fictional character and the main protagonist of the American animated sitcom The
                Simpsons.[1] He is voiced by Dan Castellaneta and first appeared, along with the rest of his family, in
                The Tracey Ullman Show short "Good Night" on April 19, 1987. Homer was created and designed by
                cartoonist Matt Groening while he was waiting in the lobby of producer James L. Brooks's office.
                Groening had been called to pitch a series of shorts based on his comic strip Life in Hell but instead
                decided to create a new set of characters. He named the character after his father, Homer Groening.
                After appearing for three seasons on The Tracey Ullman Show, the Simpson family got their own series on
                Fox, which debuted December 17, 1989. The show was later</p>
            <img src={url}/>
        </div>
    )
}