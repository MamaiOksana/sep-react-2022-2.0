import React from 'react';

export const Bart = () => {
    const url= 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
    return (
        <div className="Simpson">
            <h3>Bart Simpson</h3>
            <p>Bartholomew JoJo "Bart" Simpson[1] is a fictional character in the American animated television series
                The Simpsons and part of the Simpson family. He is voiced by Nancy Cartwright and first appeared on television
                in The Tracey Ullman Show short "Good Night" on April 19, 1987. Cartoonist Matt Groening created and designed
                Bart while waiting in the lobby of James L. Brooks' office. Groening had been called to pitch a series of shorts
                based on his comic strip, Life in Hell, but instead decided to create a new set of characters. While the
                rest of the characters were named after Groening's family members, Bart's name is an anagram of the word brat.
                After appearing on The Tracey Ullman Show for two years, the Simpson family received its own series on Fox,
                which debuted December 17, 1989. Bart has appeared in every Simpsons episode except "Four Great Women and a Manicure".</p>
            <img src={url}/>
        </div>
    )
}