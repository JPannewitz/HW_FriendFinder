
var express = require("express");
var path = require("path");

var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {

      var userData = req.body;
      var thisUsersScores = userData.scores;
      var totalDifference = 0;
      var bestMatch = 1000;
      var bestFriendIndex = -1;

      for(var i=0; i < friendsData.length; i++){
        
        totalDifference = 0;
        for(var j =0; j < thisUsersScores.length; j++){
                //for each friend calculate the total value
            var difference = Math.abs(parseInt(thisUsersScores[j]) - parseInt(friendsData[i].scores[j]));
            totalDifference += difference;
        }
    
        if(totalDifference < bestMatch){
          bestMatch = totalDifference;
          bestFriendIndex = i;
        }
    
      }


  console.log(friendsData[bestFriendIndex]);
  friendsData.push(userData);
  res.json(friendsData[bestFriendIndex]);
  });
};