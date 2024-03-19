class Game {
  constructor() {
    this._rolls = new Array(21);
    this._currentRoll = 0;
  }
  roll(pins){
    this._rolls[this._currentRoll++]=pins;
 
  }
  score(){
    let score=0
    let i=0
    for (let frame=0; frame< 10;frame++)
    {
      if (this._rolls[i]==10) 
      {
        score=score+10+this.strikeBonus(i)
        i++
      }
      else if (this.isSpare(i))
      {
        score=score+10+this.spareBonus(i)
        i=i+2
      }
      else
      {
        score=score+this.summOfBallsInFrame(i)
        i=i+2
      }
      
    }
    return score
  }

  isSpare(i){
    return this._rolls[i]+this._rolls[i+1]==10
  }
  spareBonus(i)
  {
    return this._rolls[i+2]
  }
  strikeBonus(i)
  {
    return this._rolls[i+1]+this._rolls[i+2]
  }
  summOfBallsInFrame(i)
  {
    return this._rolls[i]+this._rolls[i+1]
  }
}
export default Game;