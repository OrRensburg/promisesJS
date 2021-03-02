let numbers;

let randomNumber = () => {
   return new Promise((resolve, reject) => {
       resolve(Math.floor(Math.random() * 10) + 1)
   })
}

let generateArray = (length) => {
    return new Promise((resolve, reject) => {
        this.numbers = new Array(length);
        resolve()
    })
 }

 let insertDataToArray = () => {
    return new Promise((resolve, reject) => {
        let length = this.numbers.length
        for(let i =0; i < length; i++)
        {
            var obj = `Item ${i}`
           this.numbers[i] = obj
        }
        resolve(length)
    })
 }

 let createElement = (length) => {
    return new Promise((resolve, reject) => {
        
        for(let i =0; i < length; i++){
           let h1 = document.createElement('h1');
           h1.innerHTML = this.numbers[i]
           document.body.appendChild(h1)
        }

        resolve("finished")
    })
 }



randomNumber().then(res => {
    generateArray(res).then(
        insertDataToArray().then(res =>
            createElement(res).then(res =>
                 console.log(res))
        )
    )
});