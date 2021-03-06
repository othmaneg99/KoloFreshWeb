const axios = require("axios");

module.exports = class Request {
  constructor() {}

  async post(url, data) {
    let obj;
    await axios
      .post(url, data)
      .then(({ data }) => {
        obj = data;
      })
      .catch((e) => {
        obj = e;
      });
    return obj;
  }

  async get(url, data) {
    let items;
    await axios
      .get(url, {
        params: data,
      })
      .then(({ data }) => {
        if (data.length === 1) {
          items = data[0];
        } else {
          items = data;
        }
      });
    console.log(items);
    return items;
  }

  async update(url, data) {
    let items;
    await axios
      .patch(url, data)
      .then(({ data }) => {
        items = data;
      })
      .catch((e) => {
        return e;
      });
    return items;
  }

  async deletetfo(url, data) {
    console.log(data);
    let items;
    await axios
      .delete(url, data)
      .then(({ data }) => {
        items = data;
      })
      .catch((e) => {
        console.log(e);
      });

    return items;
  }

  async delete(url, data) {
    let items;
    await axios
      .delete(url, data)
      .then(({ data }) => {
        items = data;
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(items.data);
    return items.data;
  }
};
