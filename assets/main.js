const phrases = [
    {phrase :" Do or not, there is no try.", author : "-- Yoda"},
    {phrase :" There is a difference between knowing the path and walking the path.", author : "-- Morpheus"},
    {phrase :" We Shouldn’t Fear Change Itself, But Only Who We Might Change Into.", author : "–- Misty"}, 
    {phrase :" I want to get online... I need a computer!", author : "-- Johnny Mnemonic"},
    {phrase :" Your Body Can Be Chrome... But The Heart Never Changes. It Wants What It Wants.", author : "-- Lizzy Wizzy "},
    {phrase :" I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the darkness at Tan Hauser Gate. All those moments will be lost in time like tears in rain. Time to die.", author : "-- Roy Batty"},
    {phrase :" The sky above the port was the color of television, tuned to a dead channel.", author : "-- Willian Gibson"},
    {phrase :" What is real? How do you define ‘real’? If you’re talking about what you can feel, what you can smell, what you can taste and see, then ‘real’ is simply electrical signals interpreted by your brain.", author : "-- Morpheus"},
];


function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

function showPhraseAndAuthor() {
    const elementPhrase = document.getElementById('phrase');
    const elementAuthor = document.getElementById('author');
    const phrase = getRandomPhrase();

    elementPhrase.textContent = phrase.phrase;
    elementAuthor.textContent = phrase.author;
}

window.onload = showPhraseAndAuthor;