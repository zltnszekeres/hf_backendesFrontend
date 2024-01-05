export default class DataService {
    constructor() {
      axios.defaults.baseURL = "http://127.0.0.1:8000/";
    }
  
    getData(vegpont, megjelenit) {
      axios
        .get(vegpont)
        .then(function (response) {
          
          megjelenit(response.data);
  
        })
        .catch(function (error) {
          
          console.log(error);
        })
        .finally(function () {
          
        });
    }
  
    postData(data, vegpont, megjelenit, frissitCallback) {
      axios
      .post(vegpont, data)
      .then(function (response) {
          
          megjelenit(response.data)
          frissitCallback();
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {});
    }
  
    putData(vegpont, id, data, hibaCallback, frissitCallback ) {
      axios
        .put(vegpont + "/" + id, data)
        .then(function (response) {
          
          console.log(response);
          frissitCallback();
        })
        .catch(function (error) {
          
          console.log(error);
          hibaCallback(error);
        })
        .finally(function () {
        
        });
    }
  
    deleteData(vegpont, id, hibaCallback, frissitCallback) {
      axios
        .delete(vegpont + "/" + id)
        .then(function (response) {
          
          console.log(response);
          frissitCallback();
        })
        .catch(function (error) {
          
          console.log(error);
          hibaCallback(error);
        })
        .finally(function () {
          
        });
    }
  } 

