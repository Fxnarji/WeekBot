const MONDAY_EMOJI      = '\:Montag:1190892643169882142:'
const TUESDAY_EMOJI     = '\:Dienstag:1190892655303987210'
const WEDNESDAY_EMOJI   = '\:Mittwoch:1190892652942589982'
const THURSDAY_EMOJI    = '\:Donnerstag:1190892651382329374'
const FRIDAY_EMOJI      = '\:Freitag:1190892648563744888'
const SATURDAY_EMOJI    = '\:Samstag:1190892646961516563'
const SUNDAY_EMOJI      = '\:Sonntag:1190892645715812383'

module.exports = async function(text, channel){
    const message = await channel.send(text)
    const emojis = [
        MONDAY_EMOJI,
        TUESDAY_EMOJI,
        WEDNESDAY_EMOJI,
        THURSDAY_EMOJI,
        FRIDAY_EMOJI,
        SATURDAY_EMOJI,
        SUNDAY_EMOJI
    ];
    
    // React with all weekdays
    for (const emoji of emojis) {
        await message.react(emoji);
    }
    
}
