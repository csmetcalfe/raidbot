var Botkit = require('botkit');
var picker = require('./picker');

var controller = Botkit.slackbot({
  debug: false
});

var bot = controller.spawn({
  incoming_webhook: {
    url: 'https://hooks.slack.com/services/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'
  }
})

bot.sendWebhook({
  text: "<@" + picker.selectRandomEngineer() + "> is on bug duty today :bug: :hammer:",
  channel: '#eng-sfp',
},function(err,res) {
  if (err) { }
});
