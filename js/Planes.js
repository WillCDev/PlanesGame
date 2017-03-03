var _Airspace = new function (){
  var _allPlanes = [];

  return {
    planes: function(){ return _allPlanes },
    newPlane: function(){
      var x = new plane();
      _allPlanes.push(x);
      return;
    },
    clearPlane: function(num){
      var obj = _allPlanes[num];
      clearInterval(obj.timer);
      _allPlanes.splice(num,1);
    }
  }
}

/***** Plane Constructor Function *****/
function plane(){
  // var this = this;
// Plane Objects Variables
  this._posX = 0;
  this._posY = 0;
  this._bearing = 0;
  this._speed = 10;
  this._level = 1;

// Plane Objects Built in Methods
  this.changePosition = function(x,y){
    this._posX += 1;
    this._posY += 3;
    console.log(this._posX + ", " + this._posY);
    return;
  };
  this.changeBearing = function(val){
    this._bearing = val;
    return;
  };
  this.changeSpeed = function(val){
    this._speed = val;
    return;
  };
  this.changeLevel = function(val){
    this._level = val;
    return;
  }

// Plane Objects this Invoking Timer Function to update position
  this.timer = setInterval(this.changePosition.bind(this), 50);

}
/***** End of Plane Constructor *****/
