let count = 0;
function addClick() {
    setCounter("Add");
}
function resetClick() {
    setCounter("Res");
}
function subClick() {
    setCounter("Sub");
}
function setCounter(func) {
    console.log('Click! Count= ' + '%d' + ' ,Button= ' +'%s',count,func)
    if(func==="Add"){
        count++;
    }else if(func==="Res"){
        count=0;
    }else if(func==="Sub"){
        if(count>0){
            count--;
        }
    }
    document.getElementById("counter").textContent = count;
    console.log('Finish Count= ' + '%d',count)
}
