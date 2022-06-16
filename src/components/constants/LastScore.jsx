function LastScore() {
    const data = {
        keyCoeficient: [],
        keyNote: [],
        coeficient: [],
        note: [],
    };
    const localStorageData = [];
    for(let i=0; i<localStorage.length; i++){
        const key = localStorage.key(i)
        localStorageData.push(key)
    }
    const sortedLocalStorage = localStorageData.sort();
    
    for(let key=0; key<sortedLocalStorage.length; key+=2){
        data.keyCoeficient.push(sortedLocalStorage[key]);
        data.keyNote.push(sortedLocalStorage[key+1]);
        data.coeficient.push(JSON.parse(localStorage.getItem(sortedLocalStorage[key])));
        data.note.push(JSON.parse(localStorage.getItem(sortedLocalStorage[key+1])))
    }
    let totalScore = 0;
    let totalCoeficient = 0;
    let score = 0;
    for(let i=0; i<data.note.length; i++){
        totalScore+= data.note[i]*data.coeficient[i];
        totalCoeficient+= data.coeficient[i];
    }
    score = totalScore / totalCoeficient;
    alert(`Votre moyenne : ${score}`)
}

    

export default LastScore