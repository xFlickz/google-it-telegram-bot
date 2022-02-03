import { ContextMessageUpdate } from 'telegraf';
import { IBotHelpers } from '../../interfaces';
import { injectable } from 'inversify';

@injectable()
export class BotHelpers implements IBotHelpers {
  /**
   * Used to notify, when inline search operation
   * didn't give any result.
   * @public
   * @param {ContextMessageUpdate} ctx Request context
   * @param {Number} cacheTime Seconds that telegram will cache this "Nothing found" response for this query for.
   */
  public async sendNothingFound(
    ctx: ContextMessageUpdate,
    cacheTime: number,
  ): Promise<void> {
    await ctx.answerInlineQuery(
      [
        {
          type: 'article',
          id: '0',
          title: 'Maap 😕. Gue ga menemukannya.',
          input_message_content: {
            message_text: 'Maap 😕. Gue ga menemukannya.',
          },
        },
      ],
      {
        cache_time: cacheTime,
      },
    );
  }

  /**
   * Used to notify, when error ocurred
   * @public
   * @param {ContextMessageUpdate} ctx Request context
   */
  public async sendErrorResult(ctx: ContextMessageUpdate): Promise<void> {
    await ctx.answerInlineQuery([
      {
        type: 'article',
        id: '0',
        title: 'We are sorry 😥. Error ocurred.',
        input_message_content: {
          message_text: 'We are sorry 😥. Error ocurred.',
        },
      },
    ]);
  }
}
