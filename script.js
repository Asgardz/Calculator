const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType

        if(!action){
            // console.log('number key')
            // 如果计算机显示0，就把点击的数字显示上去；如果不是0，就把点击的数字加在后面
            if(displayedNum === '0' || previousKeyType === 'operator'){
                display.textContent = keyContent
            }else{
                display.textContent = displayedNum + keyContent
            }        
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            // console.log('operator key!')
            key.classList.add('is-deperssed')
            calculator.dataset.previousKeyType = 'operator'   
          }

        if (action === 'decimal') {
            // console.log('decimal key!')
            display.textContent = displayedNum + '.'
        }
        
        if (action === 'clear') {
            // console.log('clear key!')
        }
        
        if (action === 'calculate') {
            // console.log('equal key!')
            const secondValue = displayedNum
        }

        //移除is-depressed类
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
    }
})