
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("volume")
    .setDescription("🎵 | Ses ayarları")
    .addStringOption(option => option.setName("number").setDescription("1-250").setRequired(true)),
    run: async (client, interaction, track) => {
      await interaction.deferReply()
      const string = interaction.options.getString("number")
      const volume = parseInt(string)
      const language = db.fetch(`language_${interaction.user.id}`)
if (!language) {
  const queue = client.distube.getQueue(interaction);
     if (!queue) return interaction.followUp(`There is no song on the list yet.`)
     if (isNaN(volume)) return interaction.followUp("Bir miktar belirle!")
     if (volume < 1) return interaction.followUp("Müziğin sesini en az **1** yapabilirsin.")
     if (volume > 250) return interaction.followUp("Müziğin sesini en fazla **250** yapabilirsin.")
     client.distube.setVolume(interaction, volume);
     interaction.followUp("Müziğin sesini **"+volume+"** olarak ayarladım!")
       }
      
 }
}
