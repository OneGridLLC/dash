import { Events } from "discord.js";
import type { ArgsOf, Client } from "discordx";
import { Guard } from "discordx";
import { Discord, On } from "discordx";
import { MentionsBot } from "../util.js";

@Discord()
export class Example {
  @On({ event: "messageCreate" })
  @Guard(MentionsBot)
  async onMention([message]: ArgsOf<"messageCreate">) {
    message.reply("Dash, the VelovityHQ assistant. At your service!");
  }

  @On({ event: "guildMemberAdd" })
  async onJoin([member]: ArgsOf<"guildMemberAdd">) {}
}
