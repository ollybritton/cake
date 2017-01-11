/*jshint esversion: 6 */

var cakeRecipe = {
  setDomains: function(num) {
    if(num <= 0) {
      return 1;
    } else {
      return Math.abs(num);
    }
  },
  baseLength: function(num) {
    num = this.setDomains(num);
    return num*2 + 1;
  },
  base: function(num) {
    num = this.setDomains(num);
    length = this.baseLength(num);
    var layers = ["–".repeat(length), "~".repeat(length), "–".repeat(length)];
    return layers.join("\n");
  },
  candles: function(num) {
    flames = " $".repeat(num) + " ";
    sticks = " |".repeat(num) + " ";
    return flames + "\n" + sticks;
  },
  candlesAdj: function(num) {
    flames = "$ ".repeat(num);
    sticks = " |".repeat(num) + " ";
    return flames + "\n" + sticks;
  }
};

var cake = function(num, proper = true) {
  if(proper === true) {
    return cakeRecipe.candlesAdj(num) + "\n" + cakeRecipe.base(num);
  } else {
    return cakeRecipe.candles(num) + "\n" + cakeRecipe.base(num);
  }
};
