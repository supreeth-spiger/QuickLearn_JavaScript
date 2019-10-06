const api = "https://jsonplaceholder.typicode.com/users";

const starter = () => {
  let promises;
  for (let i = 1; i <= 10; i++) {
    promises = [fetchApi(i)];

    Promise.all(promises)
      .then(result => {
        for (let j = 0; j < result.length; j++) {
          console.log(
            `\n UserID: ${result[j].id}\n NAME: ${result[j].name}\n Email: ${result[j].email}\n`
          );
        }
      })
      .catch(err => console.log(err));
  }
};

const fetchApi = async num => {
  let response = await fetch(`${api}/${num}`);
  let data = await response.json();
  return data;
};

starter();
