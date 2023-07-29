export const roundBuilder = (fixtures) => {
    let arr = [];
    fixtures.results.forEach(i => arr.push(i.game_week));
    return [...new Set(arr)];
}