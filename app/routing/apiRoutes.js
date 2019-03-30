// DEPENDENCIES

var heroMatches = require("../data/friends");

// ROUTING
module.exports = function(app) {
 
    
    // USER INPUT REQUEST TO SERVER

  app.get("/api/friends/:heroes?", function(req, res) {
    var chosen = req.params.heroes;

    if (chosen) {
      console.log(chosen);

      // CHECKS FOR A MATCH WITH USER INPUT
      for (var i = 0; i < heroMatches.length; i++) {
        if (chosen === heroMatches[i].routeName) {
          res.json(heroMatches[i]);
          return;
        }
      }

      res.json(false);
    }
    else {
      // THIS WILL PRINT ALL 
      res.json(heroMatches);
      
    }
  });

  // USER INPUT POST

  app.post("/api/newfriend", function(req, res) {
    var newhero = req.body;

    newhero.routeName = newhero.name.replace(/\s+/g, "").toLowerCase();
      for(var i = 0 ; i < newhero.scores.length; i++){
      newhero.scores[i] = parseInt(newhero.scores[i]);
    }
    
  // NEW ARRAY IS ADDED 
    heroMatches.push(newhero);
    res.json(newhero);
  });

};