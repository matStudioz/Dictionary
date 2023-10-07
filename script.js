var inputWord = document.querySelector('.form-control')
var resultDiv = document.querySelector('.results')
var submit = document.querySelector('#Submit')
let audioElement = document.querySelector('.material-symbols-outlined')
console.log(audioElement);
const apiLink = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
console.log(inputWord);

const fetchData = () => {
    const url = `${apiLink}${inputWord.value}`;
    fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data[0]);

            const str = `
                <h3>
                    ${data[0].word}<span class="material-symbols-outlined">
                        play_arrow
                    </span>
                </h3>
                <h3>Part of Speech: ${data[0].meanings[0].partOfSpeech}</h3>
                <h3>Definition: ${data[0].meanings[0].definitions[0].definition}</h3>
                <a href=${data[0].sourceUrls} target="_blank" > sourceUrls </a>
            `
            resultDiv.innerHTML = str;
            audioElement = document.querySelector('.material-symbols-outlined')
            audioElement.addEventListener("click",()=>{
                const audio = new Audio(data[0].phonetics[0].audio)
                audio.play()
            })
            console.log(audioElement);

        })
        .catch(e=>{
            alert("Inavlid Search")
            console.error(e)
        })
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    fetchData()
    console.log();
})