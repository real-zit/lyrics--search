import * as UI from './ui.js';
import { API } from './api.js'; 
UI.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log("hello");

    const artistName = UI.artistInput.value,
    songName = UI.songInput.value;
    // console.log(`${artistName} and ${songName}`)

    if(artistName=== '' || songName === ''){
        UI.messageDiv.innerHTML = `Error.. All fields need to be filled`
        UI.messageDiv.classList.add('error');
        setTimeout( () => {
            UI.messageDiv.innerHTML = '';
            UI.messageDiv.classList.remove('error');
        }, 3000);
    }
    else{
        const lyric = new API(artistName, songName);
        lyric.queryAPI()
            .then(data =>  {
                if(data.lyric.lyrics){
                    const result = data.lyric.lyrics;
                    UI.resultDiv.textContent = result;
    
                }else{
                    UI.messageDiv.innerHTML = `No Lyrics Found`;
                    UI.messageDiv.classList.add('error');
                    setTimeout( () => {
                        UI.messageDiv.innerHTML = '';
                        UI.messageDiv.classList.remove('error');
                        UI.searchForm.reset();
                    }, 3000);
                }
            })
        
    }
}) 