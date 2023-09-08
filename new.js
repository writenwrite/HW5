const car = [ "BMW", "Mercy", "Volvo", "Mini"]
for (let x of car) {
    console.log(x)
}

let language = ["JavaScript", "Python", "Java", "C=="];
for (let x of language) {
    console.log(x)
}
async function wait (ms) {
    return new Promise((resolve) => {
      console.log(`waiting ${ms}`);
  
      // call resolve after the time has elapsed
      setTimeout(() => {
        console.log('done');
        resolve();
      }, ms);
    })
  }
  
  async function go () {
    console.log('start popcorn a');
    await wait(1000);
    console.log('start popcorn b');
    await wait(1000);
    console.log('start popcorn c');
    await wait(5000);
    console.log('done', Date.now());
  }
  
  go();