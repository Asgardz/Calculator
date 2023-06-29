const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType


        const calculate = (n1, operator, n2) => {
            let result = ''
            if (operator === 'add') {
                result = parseFloat(n1) + parseFloat(n2)
              } else if (operator === 'subtract') {
                result = parseFloat(n1) - parseFloat(n2)
              } else if (operator === 'multiply') {
                result = parseFloat(n1) * parseFloat(n2)
              } else if (operator === 'divide') {
                result = parseFloat(n1) / parseFloat(n2)
              }
            return result
        }

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
            // display.textContent = keyContent
            key.classList.add('is-deperssed')
            calculator.dataset.previousKeyType = 'operator'  
            
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
          }

        if (action === 'decimal') {
            // console.log('decimal key!')
            display.textContent = displayedNum + '.'
        }
        
        if (action === 'clear') {
            // console.log('clear key!')
            display.textContent = 0
        }
        
        if (action === 'calculate') {
            // console.log('equal key!')
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            display.textContent = calculate(firstValue, operator, secondValue)
        }





        //移除is-depressed类
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
    }
})