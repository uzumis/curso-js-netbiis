const timeout = setTimeout(() =>{
    console.log(`Executando setTimeout`);
}, 2000)

const interval = setInterval(() =>{
    console.log(`Executando setInterval`);
}, 1000)

setTimeout(()=>{
    clearInterval(interval)
    console.log(`cabou`);
},5000)