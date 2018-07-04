var gifts = ['teddy bear', 'drone', 'doll']

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`)
}

for (i = 0; i < 3; i = i + 1) {
  wrapGift(gifts[i]);
}

let j = 10
 while  (j > 3) {
  console.log(`${j}`);
  j = j - 1
}

i = 0;
do {
  wrapGift(gifts[i]);
  i = i + 1
} while  (i < 3) 

