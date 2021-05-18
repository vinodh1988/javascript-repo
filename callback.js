function callme(p){
    console.log("function started running")
    sent=p("internet")
    console.log("function still running and processing ",sent);
    sent=p("youtube")
    console.log("function again still running and processing ",sent);
}

callme(
    function(data){
         console.log("caller processing",data)
         return "artificial intelligence";
    } //callback function
)


function fun23(cb){
    console.log('fun23 running')
    cb()
    console.log('fun23 ended')
    cb()
    console.log('fun23 rerun and ended')
}

fun23(
    function(){
        console.log("SOURCE FUN RUNNING")

    }
)