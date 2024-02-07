Features: Table can be generated from 2 to n numbers


New Learning:

Generator functions:
const createIterable = (multiplicand,multiplier,delay=0) => async function * tableof(){
    let step = 1
    while(step<=multiplier){
        // Introduce delay
        await delayFn(Number(playbackDelayInput.value))
        yield `${multiplicand} X ${step} = ${multiplicand*step}`
        step++
    }
}


For await of loop
for await (let value of tableIterable){
        tableContentDiv.innerHTML += Row(value)
    }

