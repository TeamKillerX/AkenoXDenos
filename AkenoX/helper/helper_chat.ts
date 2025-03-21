/* # -*- coding: utf-8 -*-
# Credits @xpushz on telegram
# Copyright 2020-2025 (c) Randy W @xtdevs, @xtsea on telegram
#
# from : https://github.com/TeamKillerX
# Channel : @RendyProjects
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.

# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

 */
export async function ChatType(type_chat: string, ctx: any): Promise<boolean> {
  if (ctx.chat?.type === type_chat) {
    await ctx.reply("Only can public group.", {
      reply_to_message_id: ctx.message?.message_id,
    });
    return true;
  }
  return false;
}

export async function verifyUser(ctx: any, userId: number) {
  try {
      const user = await ctx.api.getChat(userId);
      return user;
  } catch (error) {
      console.error("Error verifying user:", error);
      return null;
  }
}
