symbol = 0; // current symbol iteration
symbolsToLoad = 100001;

symbols = document.createElement("div");
currentDiv = document.createElement("div");

single = 1;
function addSymbols(n) {
    let now = performance.now();
    for (let i = 0; i < n; i++) {

        // Every 100 symbols create a new div.
        if (symbol % 100 == 0) {
            currentDiv.innerHTML += `<div class="separator noselect">${symbol}-${(symbol+99)}`
            symbols.appendChild(currentDiv);
            currentDiv = document.createElement("div");
        }

        // Every 10 divs create parent div
        if (symbol % 1000 == 0) {
            body.appendChild(symbols);
            symbols = document.createElement("div");
        }

        currentDiv.innerHTML += "&#" + symbol + ";";
        symbol++;
        
    }
    let time = performance.now() - now;
    single = time/n; // how much time it takes to generate single symbol
}

interval = setInterval(() => {
    counter.innerHTML = symbol + '/' + (symbolsToLoad-1).toString();
    if (symbol > symbolsToLoad){
        clearInterval(interval);
        counter.innerHTML = symbolsToLoad-1;
    }
}, 17);

function loadSymbols() {
    setTimeout(() => {
        addSymbols(17/single);
        if (symbol < symbolsToLoad) loadSymbols();
        //loop will stop after reaching the symbolsToLoad
    }, 17);
}
loadSymbols();