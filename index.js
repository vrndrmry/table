import Row from "./Row.js";

const multiplicandInput = document.querySelector('input[name="multiplicand"]');
const multiplierInput = document.querySelector('input[name="multiplier"]');
const playbackDelayInput = document.querySelector('input[name="playbackDelay"]');
const iterable = document.querySelector(".iterable");
const step = document.querySelector(".step");
const entireTable = document.querySelector('.entireTable')
const btnDiv = document.querySelector('.btn')
const outputDiv = document.querySelector('.output')
const tableContentDiv = document.querySelector('.tableContent')
const heading = document.querySelector('.heading')

let tableFn
let tableIterable
const delayFn = (delay=1000)=> new Promise((resolve)=>{
    setTimeout(()=>resolve(),delay)
})
//   Higher order function

const createIterable = (multiplicand,multiplier,delay=0) => async function * tableof(){
    let step = 1
    while(step<=multiplier){
        // Introduce delay
        await delayFn(Number(playbackDelayInput.value))
        yield `${multiplicand} X ${step} = ${multiplicand*step}`
        step++
    }
}


iterable.addEventListener("click", function (e) {
    e.preventDefault();
    btnDiv.style.visibility = 'visible'
    outputDiv.style.visibility = 'visible'
    heading.innerText = `Table for ${multiplicandInput.value}`
    if(playbackDelayInput.value != 0){
        step.style.display="none"
    }
    tableFn = createIterable(Number(multiplicandInput.value),Number(multiplierInput.value),Number(playbackDelayInput.value))
    tableIterable = tableFn()
  });


step.addEventListener("click", async function (e) {
  e.preventDefault();
  let {value, done} =  await tableIterable.next()
  if(!done){
    let row = Row(value)
    tableContentDiv.innerHTML += row
  }
});

entireTable.addEventListener("click", async function (e) {
    e.preventDefault();
    tableContentDiv.innerHTML = ""
    // let getTable=[...tableFn()]
    // let Elems = getTable.map(e=>Row(e))
    // tableContentDiv.innerHTML=Elems.join("\n")
    for await (let value of tableIterable){
        tableContentDiv.innerHTML += Row(value)
    }
  });


