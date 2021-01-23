"use strict"; 

const fetch = require('node-fetch');
const system = require('./system.json');
const chalk = require('chalk');

const apiUrl = system.api.url;

class Client {
    /**
     * 
     * @param {string} AuthKey Your bot Auth key.
     */
    constructor(AuthKey) {
        this.AuthKey = AuthKey;
    }

    /**
     * @param {number} botId The bot Id.
     * @param {number} userId The user Id for who you want to check the votes of.
     */
    getVotes(botId, userId){
        try {
            let bot = botId;
            let user = userId;
            if(!bot) new Error(chalk.red(`[${system.strings.computer.danger}] No botId inserted!`));
            if(!user) new Error(chalk.red(`[${system.strings.computer.danger}] No userId inserted!`));

            return new Promise(resolve => {
                fetch(`${apiUrl}/bot/voted/${botId}/${userId}`, {
                    headers: { 'Authorization': this.AuthKey }
                }).then(res => res.json()).then(data => {
                    resolve(data)
                }).catch((e) => {
                    console.log(system.name, e)
                })
            })
            
        } catch(e) {
            return console.log(chalk.red(`[${system.strings.computer.danger}]`, e))
        }
    }
}
module.exports = Client;