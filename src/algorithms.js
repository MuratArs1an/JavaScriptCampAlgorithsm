//Asal Sayi Bulma
function findPrime(...nums){
    let check=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]==2){
            console.log(`${nums[i]} asal sayidir`);
        }else if(nums[i]>2){
            for(let j=2; j<nums[i]; j++){
                if(nums[i]%j==0){
                    check++
                }
            }
        }
        if(check==0){
            console.log(`${nums[i]} asal sayidir`);
        }else{
            console.log(`${nums[i]} asal sayi degildir`);
        }
    }
}
findPrime(2,5,7,13,22,34,100,9,27,1)

//Arkadas Sayi Bulma
function isFriend(num1, num2){
    let total1=0;
    let total2=0;
    for(let i=1; i<num1; i++){
        if(num1%i==0){
            total1+=i;
        }
    }
    for(let i=1; i<num2; i++){
        if(num2%i==0){
            total2+=i;
        }
    }
    if(total1==num2&&total2==num1){
        console.log(`${num1} ve ${num2} arkadas sayilardir`)
    }else{
        console.log(`${num1} ve ${num2} arkadas sayi degildir`)
    }
}

isFriend(220,284)
isFriend(110,115)

function isPerfect(){
    
    for(let i=1; i<=1000; i++){
        let total=0;
        for(let j=1; j<=i; j++){ 
            if(i%j==0){
                total+=j;
            }
        }
        if(total==i*2){
            console.log(`${i} mukemmel sayidir`)
            }
    }
}
isPerfect();

//1000 ne kadar asal sayilari bulma
function prime(){
    for(let i=1; i<=1000; i++){
        findPrime(i);
    }
}

//prime();