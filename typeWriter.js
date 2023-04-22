let target = document.getElementsByClassName('profession')[0];

let professions = ['Full Stack Developer', 'Freelancer', 'Singer', 'Human Bean <3'];

let letterIndex = 0;
let phraseIndex = 0;

function clearLetters(array)
{
    if(letterIndex > -1)
    {
        let updatedPhrase = "";
        for(let i = 0; i<letterIndex; i++)
        {
            updatedPhrase += array[phraseIndex][i];
        }
        letterIndex--;
        target.textContent = updatedPhrase;
        setTimeout(()=>{
            clearLetters(array)
        }, 40);
    }else{
        phraseIndex = (phraseIndex + 1)%professions.length;
        letterIndex++;
        setTimeout(()=>{typewritter(array)}, 100)
        
    }

}
function typewritter(array)
{
    if(letterIndex < array[phraseIndex].length)
    {
        target.textContent += array[phraseIndex][letterIndex];
        letterIndex++;
        setTimeout(()=>{typewritter(array)}, 300);
    }else{
        clearLetters(array);
    }
}

typewritter(professions);