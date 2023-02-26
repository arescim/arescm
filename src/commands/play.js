
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("🎵| Müzik Çal!")
    .addStringOption(option => option.setName("name").setDescription("Müzik İsmi?").setRequired(true)),
    run: async (client, interaction, track) => {
      await interaction.deferReply().catch(err => {})
      const string = interaction.options.getString("name")
      let voiceChannel = interaction.member.voice.channel
      const language = db.fetch(`language_${interaction.user.id}`)
      if (!language) {
if (!voiceChannel) return interaction.followUp({content: "Ses Kanalnıda Değilsin!"})
const queue = client.distube.getQueue(interaction);

client.distube.voices.join(voiceChannel)

await client.distube.play(interaction.member.voice.channel, string);
const tracks = await client.player.search(string, {
    requestedBy: interaction.user
}).then(x => x.tracks[0]);
if (!tracks) return interaction.followUp("🎵 | Müzik Başladı.")
const embed = new Discord.EmbedBuilder()
.addFields({name: "Video İsmi", value: `${tracks.title}`, inline: true})
.addFields({name: "Müzisyen", value: `${tracks.author}`, inline: true})
.addFields({name: "Süre", value: `${tracks.duration}`, inline: true})
.addFields({name: "İzlenme", value: `${tracks.views}`, inline: true})
.addFields({name: "Video Arka Plan", value: "[Click]("+tracks.thumbnail+")", inline: true})
.addFields({name: "Video Linki", value: "[Click]("+tracks.url+")", inline: true})
.setColor("Aqua")
.setImage(`${tracks.thumbnail || "https://cdn.discordapp.com/attachments/997487955860009038/1009062859889705062/Baslksz-1.png"}`)
const row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setEmoji("🎵")
.setLabel("Durdur")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("dur"),
new Discord.ButtonBuilder()
.setEmoji("🔊")
.setLabel("Ses")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("volume"),
new Discord.ButtonBuilder()
.setEmoji("⏩")
.setLabel("Atla")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("skip"),
new Discord.ButtonBuilder()
.setEmoji("🌀")
.setLabel("Loop")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("loop"),
new Discord.ButtonBuilder()
.setEmoji("❓")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("soru")

)
const row2 = new Discord.ActionRowBuilder()
.addComponents(
  new Discord.ButtonBuilder()
  .setEmoji("🥁")
  .setLabel("BassBoost")
  .setStyle(Discord.ButtonStyle.Secondary)
  .setCustomId("bassboost"),
  new Discord.ButtonBuilder()
  .setEmoji("<:slowmode:740952943460614185>")
  .setLabel("Slowed")
  .setStyle(Discord.ButtonStyle.Secondary)
  .setCustomId("slowmode"),
  new Discord.ButtonBuilder()
  .setEmoji("💨")
  .setLabel("SpeedUp")
  .setStyle(Discord.ButtonStyle.Secondary)
  .setCustomId("fast"),
  new Discord.ButtonBuilder()
  .setLabel("Support Server")
  .setStyle(Discord.ButtonStyle.Link)
  .setURL("https://discord.gg/derris")
)
await interaction.followUp({embeds: [embed], components: [row, row2]}).then(messages => {
db.set(`music_${interaction.guild.id}`, { kanal: interaction.channel.id, mesaj: messages.id, muzik: string, user: interaction.user.id, başlık: tracks.title, yükleyen: tracks.author, süre: tracks.duration, görüntülenme: tracks.views, thumb: tracks.thumbnail, video: tracks.url})
})
}

}
}
