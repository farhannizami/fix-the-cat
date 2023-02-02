'use strict'

let imgnum = [2, 3, 4, 5, 6, 7, 8, 9];

imgnum = shuffleArray(imgnum);

while(!isSolvable(imgnum))
{
    imgnum = shuffleArray(imgnum);
    console.log('akbar');
}


const idlist = ['1-1', '1-2', '1-3', '2-1', '2-2', '2-3', '3-1', '3-2', '3-3'];


function convertArrayToTable(arr)
{
    let i,newarr = [];
    let eachrow = [];
    eachrow.push(0);
    for(i=1;i<=arr.length;i++)
    {
        if(i%3==2)
        {
            eachrow.push(arr[i-1]);
            newarr.push(eachrow);
            console.log(eachrow);
            eachrow = [];
        }
        else
        {
            eachrow.push(arr[i-1]);
        }
    }
    console.log(newarr);
    return newarr;
}
function getInverseCount(prearr)
{
    let inv_count = 0,i,j;
    let arr = [...prearr];
    arr.unshift(0);
    for ( i = 0; i < 9 - 1; i++)
        for ( j = i+1; j < 9; j++)
             // Value 0 is used for empty space
             if (arr[j] && arr[i] &&  arr[i] > arr[j])
                  inv_count++;
    return inv_count;
}
function isSolvable(arr)
{
    let invcount = getInverseCount(arr);
    //console.log(invcount+  "   odd na ev");

    if(invcount%2==0) return 1;
    return 0;
}

function createbox() {
    let i;
    for (i = 0; i < 9; i++) {
        const square = document.createElement("div");
        square.classList.add('cell');


        //square.id = idlist[i];

        if (i == 0) {
            square.classList.add('faka');
            square.innerHTML = "<img src='images/solid-color-image.jpeg' width=208px height=208px class='imgbox' id='" + idlist[i] + "'></img>";
        }
        //document.querySelector(square).appendChild(elem);

        //let imgnum = Math.floor(Math.random() * (9 - 2 + 1) + 2);

        if (i != 0) {
            console.log(imgnum[i - 1]);
            square.innerHTML = "<img src='images/" + imgnum[i - 1].toString() + ".jpg' width=208px height=208px class='imgbox' id='" + idlist[i] + "'></img>"
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


function faltu() {
    //alert('lol');
    console.log('nice');
}


createbox();


function htmlChanger()
{

}


function checkSurround(idval) {

    //alert('oma');
    let victim = document.getElementById(idval);
    //current. = 'asdasda';

    //console.log(victim.parentNode);

    let [fir, sec] = idval.split('-');
    console.log(fir, sec);
    fir = Number(fir);
    sec = Number(sec);

    let [upf, ups] = [fir - 1, sec];
    let [downf, downs] = [fir + 1, sec];
    let [rightf, rights] = [fir, sec + 1];
    let [leftf, lefts] = [fir, sec - 1];

    console.log(upf,ups);
    console.log(downf,downs);
    console.log(rightf,rights);
    console.log(leftf,lefts);

    if(upf>0)
    {
        let newid = upf.toString()+'-'+ups.toString();
        let target = document.getElementById(newid);

        //console.log('ekhane');

        let victim_parent = victim.parentElement;
        let target_parent = target.parentElement;
        console.log(target_parent);


        if(target_parent.classList.contains('faka'))
        {
            console.log('ekhane');
            victim_parent.classList.add('faka');
            target_parent.classList.remove('faka');

            victim.id = newid;
            target.id = idval;

            //[victim_parent.innerHTML,target_parent.innerHTML] = [target_parent.innerHTML,victim_parent.innerHTML];

            console.log(victim_parent);
            console.log(target_parent);

            victim_parent.removeChild(victim_parent.childNodes[0]);
            victim_parent.appendChild(target);

            //target_parent.removeChild(target_parent.childNodes[0]);
            console.log(victim);
            target_parent.appendChild(victim);

            return;

            //console.log(victim);
            //console.log(target);
        }
        
    }
    if(downf<=3)
    {
        let newid = downf.toString()+'-'+downs.toString();
        let target = document.getElementById(newid);


        console.log(newid+ "    neww");

        //console.log('ekhane');

        let victim_parent = victim.parentElement;
        let target_parent = target.parentElement;
        console.log(target_parent);


        if(target_parent.classList.contains('faka'))
        {
            console.log('okhane');
            victim_parent.classList.add('faka');
            target_parent.classList.remove('faka');

            victim.id = newid;
            target.id = idval;

            //[victim_parent.innerHTML,target_parent.innerHTML] = [target_parent.innerHTML,victim_parent.innerHTML];

            console.log(victim_parent);
            console.log(target_parent);

            victim_parent.removeChild(victim_parent.childNodes[0]);
            victim_parent.appendChild(target);

            //target_parent.removeChild(target_parent.childNodes[0]);
            console.log(victim);
            target_parent.appendChild(victim);

            return;

            //console.log(victim);
            //console.log(target);
        }
    }
    if(rights<=3)
    {
        let newid = rightf.toString()+'-'+rights.toString();
        let target = document.getElementById(newid);


        console.log(newid+ "    neww");

        //console.log('ekhane');

        let victim_parent = victim.parentElement;
        let target_parent = target.parentElement;
        console.log(target_parent);


        if(target_parent.classList.contains('faka'))
        {
            console.log('dane');
            victim_parent.classList.add('faka');
            target_parent.classList.remove('faka');

            victim.id = newid;
            target.id = idval;

            //[victim_parent.innerHTML,target_parent.innerHTML] = [target_parent.innerHTML,victim_parent.innerHTML];

            console.log(victim_parent);
            console.log(target_parent);

            victim_parent.removeChild(victim_parent.childNodes[0]);
            victim_parent.appendChild(target);

            //target_parent.removeChild(target_parent.childNodes[0]);
            console.log(victim);
            target_parent.appendChild(victim);

            return;

            //console.log(victim);
            //console.log(target);
        }
    }
    if(lefts>0)
    {
        let newid = leftf.toString()+'-'+lefts.toString();
        let target = document.getElementById(newid);


        console.log(newid+ "    neww");

        //console.log('ekhane');

        let victim_parent = victim.parentElement;
        let target_parent = target.parentElement;
        console.log(target_parent);


        if(target_parent.classList.contains('faka'))
        {
            console.log('bame');
            victim_parent.classList.add('faka');
            target_parent.classList.remove('faka');

            victim.id = newid;
            target.id = idval;

            //[victim_parent.innerHTML,target_parent.innerHTML] = [target_parent.innerHTML,victim_parent.innerHTML];

            console.log(victim_parent);
            console.log(target_parent);

            victim_parent.removeChild(victim_parent.childNodes[0]);
            victim_parent.appendChild(target);

            //target_parent.removeChild(target_parent.childNodes[0]);
            console.log(victim);
            target_parent.appendChild(victim);

            return;

            //console.log(victim);
            //console.log(target);
        }
    }


}


const boxes = document.querySelectorAll('.imgbox');

boxes.forEach(box => {
    box.addEventListener('click', function handleClick(event) {
        //alert('hi');
        console.log('box clicked', event.target.id);
        checkSurround(event.target.id);
    });
});