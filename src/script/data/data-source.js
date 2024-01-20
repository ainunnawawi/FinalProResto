class DataSource {
  static searchMenu(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return Promise.reject(`${keyword} is not found`);
      });
  }

  static getMenuById(idMeal) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals[0]);
        } else {
          return Promise.reject(`Menu with ID ${idMeal} not found`);
        }
      })
      .catch(error => {
        console.error('Error fetching menu details:', error);
        return Promise.reject('Failed to fetch menu details');
      });
  }
}

export default DataSource;
