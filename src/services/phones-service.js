import HttpService from './http-service.js';

const PhonesService = {
  loadPhones(filter) {
    if(this._phones) {
      return new Promise(resolve => {
        const filteredPhones = this._filter(this._phones, filter.query);
        const sortedPhones = this._sort(filteredPhones, filter.order);

        resolve(sortedPhones);
      });
    }

    return HttpService.send('https://raw.githubusercontent.com/levanta/react-gh-pages/gh-pages/api/phones.json')
      .then((phones) => {
        this._phones = phones;
        const filteredPhones = this._filter(phones, filter.query);
        const sortedPhones = this._sort(filteredPhones, filter.order);

        return sortedPhones;
      });
  },

  loadPhone(phoneId) {
    return HttpService.send(`https://raw.githubusercontent.com/levanta/react-gh-pages/gh-pages/api/phones/${ phoneId }.json`);
  },

  _sort(phones, orderField) {
    return phones.sort((a, b) => {
      var textA = a[orderField].toString().toUpperCase();
      var textB = b[orderField].toString().toUpperCase();

      return textA.localeCompare(textB, undefined, {numeric: true, sensitivity: 'base'})
    });
  },

  _filter(phones, query) {
    if (!query) return phones;

    return phones.filter((phone) => phone.name.toLowerCase().includes( query.toLowerCase() ));
  }
};

export default PhonesService;