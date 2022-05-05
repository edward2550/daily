// function Stopwatch(){
//     let startTime , endTime, running , duration = 0

//     this.start = function(){
//         if(running){
//             throw new Error('clock is arleady running')
//         } else {
//             running = true
//             startTime = new Date()
//         }
//     }

//     this.stop = function(){
//         if(!running){
//             throw new Error('clock is not running')
//         } else {
//             running = false 
//             endTime = new Date()

//             const seconds = (endTime.getTime() - startTime.getTime()) / 1000
//             duration += seconds
//         }
//     }

//     this.reset = function(){
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
 
//     }
//     Object.defineProperty(this,'duration',{
//         get: function() {return duration}
//     })

// }

// const sw = new Stopwatch()


function StopWatch(){
    let running, duration , startTime, endTime = 0

    this.start = function(){
        if(running){
            throw new Error('The clock is already running')
        }
        else{
            running = true
            startTime = new Date()
        }
    }

    this.stop(){
        if(!running){
            throw new Error('Stopwatch is not running')
        } else {
            running = false
            endTime = new Date()
            duration = (endTime.getTime() - startTime.getTime()) / 1000
        }

    }

}