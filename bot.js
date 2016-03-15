var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
});

// connect the bot to a stream of messages
controller.spawn({
  token: process.env.token
}).startRTM();

// give the bot something to listen for.
controller.hears('hello','direct_message,direct_mention,mention',function(bot,message) {
  bot.reply(message,'Hello yourself.');
});

controller.hears(['draw', 'pick', 'next', 'select', 'choose'],'direct_message,direct_mention,mention',function(bot,message) {

  engineers = ["abaker", "cmetcalfe", "cnguyen", "jbecker", "johnny", "mthompson"];
  bugEmojis = [":ant:", ":beetle:", ":bug:", ":spider:"];

  var bugEmoji = bugEmojis[Math.floor(Math.random() * bugEmojis.length)];
  var onCallEngineer = engineers[Math.floor(Math.random() * engineers.length)];
  var onCallEngineerTag = "<@" + onCallEngineer + ">";

  bot.reply(message, "Let's put " + onCallEngineerTag + " on bug duty today " + bugEmoji + " :hammer:");
});
