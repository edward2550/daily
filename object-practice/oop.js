class Streaming{
    constructor(name, runTime, rating, description, actor, genre){
      this._name = name
      this._runTime = runTime
      this._rating = rating
      this._description = description
      this._actor = actor
      this.genre = genre
    }
      get name(){
      return this._name
    }
      get runTime(){
      return this._runTime
    }
      get rating(){
      return this._rating
    }
      get description(){
      return this._description
    }
      get actor(){
      return this._actor
    }
    get genre(){
        return this.genre
    }
    stillThere(){
      console.log(`Are you still watching ${this._name}?`)
    }
    information(){
      console.log(`${this._name} has a runTime of ${this._runTime}, and has a rating of ${this._rating}. ${this._name} is about ${this._description} and is starring ${this._actor}.`)
    }
  }
  
  //Movies Class
  class Movies extends Streaming{
    constructor(name, runTime, rating, description, actor, theaterDate, boxOfficeRevenue){
      super(name, runTime, rating, description, actor)
      this._theaterDate = theaterDate
      this._boxOfficeRevenue = boxOfficeRevenue
    }
    get theaterDate(){
    return this._theaterDate
    }
    get boxOfficeRevenue(){
      return this._boxOfficeRevenue
    }
    getPopcorn(){
      console.log(`You could buy this much popcorn with the ${this._boxOfficeRevenue}.`)
    }
  }
  
  //TV Shows Class
  class TvShows extends Streaming{
    constructor (name, runTime, rating, description, actor, seriesType, 
  }
  
  //Genres 
  
  
