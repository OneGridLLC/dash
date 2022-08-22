import { ArgsOf, GuardFunction } from "discordx";
import { bot } from "./main.js";

import {
  ANNOUNCEMENTS_CHANNEL_ID,
  GENERAL_CHANNEL_ID,
  PRIMARY_GUILD_ID,
} from "./config.js";

export const MentionsBot: GuardFunction<ArgsOf<"messageCreate">> = async (
  [message],
  client,
  next
) => {
  const me = client.user?.id;
  if (!me || !message.mentions.has(me)) {
    return;
  }

  await next();
};

export const getPrimaryGuild = () => bot.guilds.fetch(PRIMARY_GUILD_ID);

export const getAnnoucementsChannel = () =>
  bot.channels.fetch(ANNOUNCEMENTS_CHANNEL_ID!);

export const getGeneralChannel = () => bot.channels.fetch(GENERAL_CHANNEL_ID!);
