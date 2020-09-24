const localA = [];
const localB = [];
const localC = [];
const localD = [];

function add(){
let contA = localA.length();
let contB = localB.length();
let contC = localC.length();
let contD = localD.length();

    if(contA < contB && contA < contC && contA < contD){
        localA.push(obj);
        console.log("ADD no A");
    }else if (contB < contA && contB < contC && contB < contD){
        localB.push(obj);
        console.log("ADD no B");
    }else if (contC < contA && contC < contB && contC < contD){
        localC.push(obj);
        console.log("ADD no C");
    }else{localD.push(obj);
            console.log("ADD no D");

    }
    console.log("Não foi possivel empilhar");
}
function remove()
{}
    add('Container1');

    add('Container2');

    add('Container3');

    add('Container4');
