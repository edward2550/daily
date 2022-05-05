// class Animal {

//     constructor(name) {
//       this.name = name;
//     }
  
//   }
  
//   class Rabbit extends Animal {
//     constructor(name) {
//      super(name)
//       this.created = Date.now();
//     }
//   }
  
//   let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
//   console.log(rabbit.name);

class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  class ExtendedClock extends Clock {
      constructor(settings){
          super(settings)
         this.precision = (settings.precision == null) ? 1000 : settings.precision 
      }
      start(){
        this.render()
        this.timer = setInterval(() => this.render(),this.precision);
      }
  }


 let lowResolutionClock = new ExtendedClock({
     template :'h:m:s',
     precision : 10000
 });

 lowResolutionClock.start()