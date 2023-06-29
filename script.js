const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        if(!action){
            // 如果计算机显示0，就把点击的数字显示上去；如果不是0，就把点击的数字加在后面
            if(displayedNum === '0'){
                display.textContent = keyContent
            }else{
                display.textContent = displayedNum + keyContent
            }
            console.log('number key')
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            key.classList.add('is-deperssed')
            console.log('operator key!')
          }

        if (action === 'decimal') {
            display.textContent = displayedNum + '.'
            console.log('decimal key!')
        }
        
        if (action === 'clear') {
            console.log('clear key!')
        }
        
        if (action === 'calculate') {
            console.log('equal key!')
        }
    }
})