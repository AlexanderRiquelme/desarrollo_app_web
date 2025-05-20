function multiplicaPares() {
    let valores = [0,1,2,3,4,5,6,7,8,9,10]
    let mult = 0
    for (let i = 0; i < valores.length; i = i + 2){
        
        mult = mult + valores[i] * valores[i]
        console.log(mult,i)
    }
    
    
    alert(mult)
}

