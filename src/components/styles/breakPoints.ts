const size = {
    sm: '640px',
    md: '1024px',
    lg: '1200px',
    ex : '1400px',
}

const device = {
    sm : `(min-width : ${size.sm})`,
    md: `(min-width : ${size.md})`,
    lg: `(min-width : ${size.lg})`,
    ex: `(min-width : ${size.ex})`,
}

export default {size, device}