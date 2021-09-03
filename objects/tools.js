const imageURL = `https://steamcommunity-a.akamaihd.net/economy/image/`;

const rarityToColor = rarity => {
    if (rarity == 1) return '#b0c3d9';
    if (rarity == 2) return '#5e98d9';
    if (rarity == 3) return '#4b69ff';
    if (rarity == 4) return '#8847ff';
    if (rarity == 5) return '#d32ee6';
    if (rarity == 6) return '#eb4b4b';
    if (rarity == 7) return '#e4ae39';
    return '#6a6156';
};

const imagesToUri = imgs => {
    var conditions = ["Factory New", "Minimal Wear", "Field-Tested", "Well-Worn", "Battle-Scarred"];

    for (var i = 0; i < conditions.length; i++) {
        if (imgs[conditions[i]] !== undefined) {
            if (imgs[conditions[i]] != '-')
                return imgs[conditions[i]];
        }
    }

    return "";
}


export default { imageURL, rarityToColor, imagesToUri };