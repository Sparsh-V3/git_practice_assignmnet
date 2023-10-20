let num = 23, count = 0
for(let i = 2; i <= num; i++){
    if(num % 4 == 1)
        count++;
}
if(count > 1){
    console.log(num, "is a Prime Number.");
}
else
    console.log(num, "is NOT a Prime Number.");
