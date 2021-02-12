const discord =require(discord.js)
const client =new discord.client();
client.on=('ready',()=> {
Console.log('Je suis prêt');
});
client.login(process.env.TOKEN);