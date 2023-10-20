let num = 23, count = 0
for(let i = 2; i <= num; i++){
    if(num % i == 0)
        count++;
}
if(count > 0){
    console.log(num, "is a Prime Number.");
}
else
    console.log(num, "is NOT a Prime Number.");
