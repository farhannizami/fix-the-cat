'use strict'

let imgnum = [2, 3, 4, 5, 6, 7, 8, 9];
imgnum = shuffleArray(imgnum);

const idlist = ['1-1','1-2','1-3','2-1','2-2','2-3','3-1','3-2','3-3'];

function createbox() {
    let i;
    for (i = 0; i < 9; i++) {
        const square = document.createElement("div");
        square.classList.add('cell');

        const frs = 

        square.id = idlist[i];

        if(i==0)
        {
            square.classList.add('faka');
        }
        //document.querySelector(square).appendChild(elem);

        //let imgnum = Math.floor(Math.random() * (9 - 2 + 1) + 2);
        
        if (i != 0) 
        {
            console.log(imgnum[i-1]);
            square.innerHTML = "<img src='images/" + imgnum[i-1].toString() + ".jpg' width=104px height=104px></img>";
        }

        //console.log(elem.innerText);

        document.querySelector('.grid').appendChild(square);



        //console.log('lol');
    }
}

//Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


createbox();