const chalk = require('chalk');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const fetch = require('node-fetch');

  readline.question('username: ', name => {
      var P = ["\·", "˙", "·", "․"];
      let x = 0;
      const loader = setInterval(() => {
        process.stdout.write(`\r${P[x++]}`);
        x %= P.length;
      }, 250);
    setTimeout(() => {
      clearInterval(loader);
    }, 24000);
    fetch(`https://server.duinocoin.com/users/${name}`)
    .then(res => res.json())
    .then(json => console.log(`--------------\nusername: ${json.result.balance.username}\nbalance: ${json.result.balance.balance}`))
   readline.close() 
  });
