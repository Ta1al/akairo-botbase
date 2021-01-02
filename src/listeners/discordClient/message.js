const { Listener } = require('discord-akairo');
class messageListener extends Listener {
  constructor() {
    super('message', {
      emitter: 'client',
      event: 'message'
    });
  }

  async exec(msg) {
    const prefix = await this.client.commandHandler.prefix(msg)
    if(!msg.author.bot && msg.content === '<@!727449423151366185>') return msg.reply(`My prefix is \`${prefix}\``)
  }
}

module.exports = messageListener;