async function bug(message, client, texts, num) {
    try {
        const remoteJid = message.key?.remoteJid;
        await client.sendMessage(remoteJid, {
            image: { url: `database/${num}.jpg` },
            caption: `> ${texts}`,
            contextInfo: {
                externalAdReply: {
                    title: "Join Our WhatsApp Channel",
                    body: " 𓆩 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐂𝐫𝐞𝐰 𝟐𝟒𝟑 𓆪 ", // mettez votre nom 
                    mediaType: 1,
                    thumbnailUrl: `https://whatsapp.com/channel/0029VbBT7FdLCoX1TDyQQb1B`,// ici vous pouvez mettre le lien de votre chaîne WhatsApp, groupe ou autre 
                    renderLargerThumbnail: false,
                    mediaUrl: `${num}.jpg`,
                    sourceUrl: `${num}.jpg`
                }
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export default bug;