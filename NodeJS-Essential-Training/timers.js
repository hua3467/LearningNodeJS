var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;
var pctWaited = 0;

function writeWaitingPct(p){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function(){
    currentTime += waitInterval;
    pctWaited = Math.floor((currentTime/waitTime)*100);
    writeWaitingPct(pctWaited);
}, waitInterval);

setTimeout(function(){
    clearInterval(interval);
    writeWaitingPct(100);
    console.log("\nDone\n");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPct(pctWaited);