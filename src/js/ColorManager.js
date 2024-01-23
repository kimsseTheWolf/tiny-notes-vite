
const baseColor = {
    red: [244, 67, 54],
    orangeRed: [255, 87, 34],
    orange: [255, 152, 0],
    yellow: [255, 193, 7],
    green: [76, 175, 80],
    aqua: [0, 188, 212],
    blue: [33, 150, 243],
    purple: [156, 39, 176],
    pink: [233, 30, 99],
    brown: [121, 85, 72],
    grey: [158, 158, 158],
    black: [0, 0, 0],
    white: [255, 255, 255],
}

const baseAlpha = {
    0: 0,
    1: 0.1,
    2: 0.2,
    3: 0.3,
    4: 0.4,
    5: 0.5,
    6: 0.6,
    7: 0.7,
    8: 0.8,
    9: 0.9,
    10: 1,
}

function getColor(color, alpha) {
    const rgb = baseColor[color]
    const a = baseAlpha[alpha]
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${a})`
}

export { getColor }