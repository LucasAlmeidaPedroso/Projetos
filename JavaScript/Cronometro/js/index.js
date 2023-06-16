var second=0
var minute=0
var hour=0
var pausa=0
var interval

function Digits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    if (pausa == 0){
    pausa = 1
    watch()
    interval= setInterval(watch,100)
}


}

function pause(){
    pausa = 0
    clearInterval(interval)

}

function stop(){
    pausa = 0
    clearInterval(interval)
    second=0
    minute=0
    window.alert("Você parou o cronônemtro em: "+document.getElementById('contador').innerText)
    document.getElementById('contador').innerText='00:00:00'

}

function watch(){
    second++
    if(second==60){
        minute++
        second=0
        if(minute==60){
            minute=0
            hour++
        }
    }
    document.getElementById('contador').innerText=Digits(hour)+':'+Digits(minute)+':'+Digits(second)
}