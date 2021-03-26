const names = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]

function list(names) {
    if (names.length === 0) {
        return '';
    }
    if (names.length === 1) {
        return names[0].name;
    }

    const listNames = names.map(item => item.name);
    let lastName = listNames.pop();

    return listNames.join(', ') + ' & ' + lastName;
}

list(names)