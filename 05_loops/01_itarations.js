

// for(let i=0; i<10; i++){
//     console.log(i);
// }


for (let i = 0; i < 3; i++) {
    const element = i;
    // console.log(`Outer loop value ${element}`);
    for(let j = 0; j < 2; j++){
        const ele = j;
        // console.log(ele);
    }
}


for (let i = 1; i < 5; i++) {
    const element = i;
    // console.log(`Outer loop value ${element}`);
    for(let j = 1; j <= 5; j++){
        const ele = j;
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}


let heros = ["Flash", "Dr. Strange", "Spiderman", "Captain America", "Ironman", "Thor"]
// console.log(heros.length);
for(let i=0; i<heros.length; i++){
    // console.log(heros[i]);
}


for (let i = 0; i < heros.length; i++) {
    const element = heros[i];
    if(element === "Ironman"){
        // console.log(`${element} is a great Hero and we found our fev hero now we can end our search`);
        break;
    }

    // console.log(element);
}

for (let i = 0; i < heros.length; i++) {
    const element = heros[i];

    if(element === "Spiderman"){
        console.log(`${element} is a great Hero and but He is not my fev so we CONTINUE our search`);
        continue
    }

    if(element === "Ironman"){
        console.log(`${element} is a great Hero and we found our fev hero now we can BREAK/END our search`);
        break
    }

    console.log(element);
}
