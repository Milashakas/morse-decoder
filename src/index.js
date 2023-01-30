const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let count=Math.floor(expr.length/10);
   let arr=[];
   let  count2=0;
   let count3=10;
   for (let i=0;i<=count;i++) {
arr.push(expr.slice(count2,count3));
count2=count2+10;
count3=count3+10;
   }
let arr2=arr.map(function (item) {
    if (item==['**********']) {
        return item
    } else {
let arrnew=[];
let  count2=0;
let count3=2;
for (let i=0;i<=4;i++) {
arrnew.push(item.slice(count2,count3));
count2=count2+2;
count3=count3+2;
}
return arrnew
    }
})
let arr3=arr2.map(function (v) {
    if (v==["**********"]) {
        return v
    } else {
        
    let v2=v.map(function (c) {
       
        if(c=="00") {

        } else if (c=='11') {
            return '-'
        } else if (c=="10"){
return '.'
        }
       
    })
    return v2
}

})

for (let a=0;a<=arr3.length-1;a++) {
    for (let b=0;b<=arr3[a].length-1; b++) {
        if (arr3[a][b]==undefined) {
            arr3[a].splice(0,1);
            b--
        }
    }
}
let arr4=arr3.map(function (item) {
    if (item!=['**********']){
        return  item.join('');
    } else {
        return [" "]
    }
  }
);

let arr5=arr4.map(function (item) {
    if (item in MORSE_TABLE) {
        return MORSE_TABLE[item]
    } else if (item==" ") {
        return " "
    }
});
return arr5.join('')
}
const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
console.log(decode(expr));

module.exports = {
    decode
}