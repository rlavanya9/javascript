function countMelons(melonList){
    let melonCounts = {};
    for (const melon of melonList){
        if (melonCounts.hasOwnProperty(melon)){
            melonCounts[melon] += 1;
        }else{
            melonCounts[melon] = 1;
        }

    }
    return melonCounts
}