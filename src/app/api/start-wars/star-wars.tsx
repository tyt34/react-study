const url = "https://swapi.dev/api/";

export type IDataStarWars = "things" | "planets" | "starships";

export async function getData(typeData: IDataStarWars) {
  console.log(" -> ", typeData);
  let urlTypeData = "";
  if (typeData === "things") {
    urlTypeData = "people/";
  } else if (typeData === "planets") {
    urlTypeData = "planets/";
  } else if (typeData === "starships") {
    urlTypeData = "starships/";
  }
  console.log(" URL: ", url + urlTypeData);
  let res = await fetch(url + urlTypeData, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();
  //console.log("data get: ", json);
  return json;
}
