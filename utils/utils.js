require('colors');

const menuOptions = (searchs) => {
    return {
        '1': async (inputReader) => {
            //Get Name Location
            const location = await inputReader('Ingrese el nombre de la ciudad.');
            searchs.searchCity(location)
            // console.log(location);

            console.log('\nInformación de la ciudad\n'.cyan);
            console.log('Ciudad: ',);
            console.log('Lat: ',);
            console.log('Lng: ',);
            console.log('Temperatura');
            console.log('Min: ',);
            console.log('Max: ',);
            return true;
        },
        '2': () => {
            console.log('Option 2');
            return true;
        },
        '0': () =>{ return true; }
    }
}

module.exports = {
    menuOptions,
}