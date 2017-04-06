export default defineAction([
    'DEFAULT'
]);

function defineAction(names) {
    return names.reduce((result, name) => {
        result[name] = name;
        return result;
    }, {});
}