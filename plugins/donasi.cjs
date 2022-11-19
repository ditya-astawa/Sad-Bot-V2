var handler = async m => m.reply(`
╭─「 Donasi 」
│ • IM3 [085792429140]
│ • DANA [085792429140]
│ • OVO [085738153140]
│ • GOPAY [085792429140]
│ • SHOPPY PAY [gakada]
│ • Saweria [-]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285237596750
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
