const baseUrl = "https://swapi.py4e.com/api";

const endpoints = ["films", "people", "planets"];

const fetchSingleEndpoint = async (endpoint) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`);
    const data = await response.json();
    return data.results;
  } catch (e) {
    throw new Error(String(e));
  }
};

/* const requests = [fetchSingleEndpoint("films"), [fetchSingleEndpoint("people"), [fetchSingleEndpoint("planets") ] */
export const requests = endpoints.map((endpoint) => fetchSingleEndpoint(endpoint));



//Promise.allSettled(promises).then((results) =>
//    results.forEach((result) => console.log(result.status)),
//  );
