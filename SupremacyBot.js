// Import modules...
const Discord = require("discord.js");
// Create client instance...
const client = new Discord.Client();

// Ready the bot...
client.on("ready", function() {
    //Let the user know the bot is open...
	console.log("SupremacyBot, running on NodeJS.")
	// Set updateProfile interval...
	client.setInterval(client.updateProfile, (120 * 1000));
    // Do it...
	client.updateProfile();
});
// Define updateProfile...
client.updateProfile = function() {
    //Define status messages...
	var statusMsgs = [
	    "with your mom | ./help",
		"Minecraft | ./help",
		"with daddy Rapid | ./help"
		"on some servers | ./help",
		"Call of Duty: Black Ops 69 | ./help",
		"a game | ./help",
	];
        // Set 'Playing' text to a random choice out of the 'statusMsgs' variable...
        client.user.setPresence({game: {name: (statusMsgs[Math.floor(Math.random() * statusMsgs.length)]), type: 0 }});
};
// Start an event listener...
client.on('message', message => {

  if (message.channel.type === "text" && message.isMentioned(client.user)) {
      message.channel.send({
          embed: {
              color: 0x008080,
              fields: [
                  {
                      name: "Please do not mention me,\nI do not have capabilites beyond displaying this text...",
                      inline: true,

                  }
              ]
          }
      })
  }

// all commands
  else if (message.content === './ping') {
      message.channel.send({
          embed: {
              color: 0x008080,
              fields: [
                  {
                      name: "Pong! :ping_pong:",
                      value: "Ping Time: " + new Date().getTime() - message.createdTimestamp + " ms",
                      inline: true,
                  },
              ],
          }
      })
  }
  else if (message.content === './pong') {
      message.channel.send({
          embed: {
              color: 0x008080,
              fields: [
                  {
                      name: "Ping! :ping_pong:",
                      value: "Ping Time: " + new Date().getTime() - message.createdTimestamp + " ms",
                      inline: true,
                  },
              ],
          }
      })
  }
  else if (message.content === './avatar') {
      message.channel.send({
          embed: {
              color: 0x008080,
              title: "Avatar Retriever",
              description: "Here it is... yikes.",
			  image: {
				  url: message.author.displayAvatarURL
			  }
          }
      })
  }
  else if (message.content === './channelid') {
    message.channel.send({embed:{
    color: 0x008080,
	title: "Channel Identifier",
	description: "Here ya go bud.",
	thumbnail: {
		url:
          "https://cdn.discordapp.com/avatars/326720733327654913/3c6aca41df96ed0a6f84f3a7b34ea4bb.webp?size=2048",
        },
	  fields: [
	  {
		  name: "This channel has a unique identifier of...",
		  value: message.channel.id,
		  inline: true,
	  },
	  ],
    }})
  }
  else if (message.content === './invite') {
      message.channel.send({
          embed: {
              color: 0x008080,
              fields: [
                  {
                      name: "Ah, invite huh? Here :link:;",
                      value: "https://discordapp.com/oauth2/authorize?client_id=378251561316384777&scope=bot&permissions=8",
                      inline: true,
                  },
              ],
          }
      })
  }
  else if (message.content === './botinfo') {
      message.channel.send({
          embed: {
              color: 0x008080,
              title: "Supremacy Bot Information",
              thumbnail: {
                  url:
                  "https://cdn.discordapp.com/attachments/382331380656242702/382652629190311936/20171118_170053.jpg"
              },
              fields: [
                  {
                      name: "Supremacy Bot",
                      value: "A bot inspired by the bot RobotNTR, the creator of RobotNTR is SpadesNTR."
                      inline: true,
                  },
                  {
                      name: "More?",
                      value: "Supremacy Bot was coded by Rapid on Node.js (android not pc) so it is not the greatest bot. It has very basic commands and responses, it willgrow as time moves on.",
                      inline: true,
                  }
              ],
          }
      })
  }
  else if (message.content === './help') {
      message.channel.send({
          embed: {
              color: 0x008080,
              title: "Command list",
              description: "Full list of commands :page_facing_up:",
              thumbnail: {
                  url:
                  "https://cdn.discordapp.com/avatars/326720733327654913/3c6aca41df96ed0a6f84f3a7b34ea4bb.webp?size=2048",
              },
              fields: [
                  {
                      name: "./help",
                      value: "Shows this exact message.",
                      inline: true,
                  },
                  {
                      name: "./ping, ./pong",
                      value: "I have absolutely no idea to be honest with you...",
                      inline: true,
                  },
                  {
                      name: "./avatar",
                      value: "Retrieves the users avatar directly from Discord.",
                      inline: true,
                  },
                  {
                      name: "./channelid",
                      value: "Retrieves the ID of the channel the command is run in. Useful for debugging...",
                      inline: true,
                  },
                  {
                      name: "./invite",
                      value: "Posts a link to invite the bot to your server.",
                      inline: true,
                  },
                  {
                      name: "./botinfo",
                      value: "Displays some supper cool stuff on the bot",
                      inline: true,
                  },
		  {
		      name: "./chinesecowboy",
		      value: "So offensive that Mario's stomach ulcer practically explodes and he is unable to ask Luigi to stop being so fucking racist.",
		      inline: true,
		  },
		  {
		      name: "./online, ./idle",
		      value: "Changes the bot's status. One sets it to Online, the other to Idle.",
		      inline: true,
		  }
              ],
          }
      })
  }
    else if (message.content === './chinesecowboy') {
      message.channel.send({
          embed: {
              color: 0x008080,
			  image: {
				  url: "http://i.imgur.com/uRbrpaK.jpg"
			  }
          }
      })
  }
    else if (message.content === './idle') {
		client.user.setStatus("idle");
  }
    else if (message.content === './online') {
		client.user.setStatus("online");
  }
});

// Log in using a given token...
client.login(process.env.BOT_TOKEN);