export const intersection = (a, b) => a.filter(v => b.includes(v));

export const difference = (a, b) => a.concat(b).filter(v => !a.includes(v));
