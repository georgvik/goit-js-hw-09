const formEl = document.querySelector('.form');

formEl.addEventListener("submit", timePromise);

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    const objProm = {position, delay};
    
    return new Promise ((resolve, reject) => {
             setTimeout (() =>{
    if (shouldResolve) {
      // Fulfill
      resolve (objProm);
    } else {
      // Reject
      reject (objProm);
    }
    }, delay);
    });
  };

    function timePromise (e){
      e.preventDefault();
      const {delay, step, amount} = e.currentTarget.elements;
      let inputDelay = Number(delay.value);
      let stepEl = Number(step.value);
      let inputAmount = Number(amount.value);

      for (let i=1; i <=inputAmount; i+=1){
      createPromise(i, inputDelay)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
        inputDelay+=stepEl;
    }
  }

   