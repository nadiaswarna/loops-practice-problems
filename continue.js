var numbers = [45, 87, 89, 188, 77, 98,25]

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        continue;
    }
    console.log(number);
}