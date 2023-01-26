/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData, IDataStarWars } from "../../api/start-wars/star-wars";
import { pages } from "../../app";
import "./star-wars.scss";

type IFetch = {
  name: string;
};

const StarWars = () => {
  const [list, setList] = useState([]);
  let { type } = useParams();
  console.log(" => ", type);
  const navigate = useNavigate();

  const changePage = (pageName: string): void => {
    navigate(pageName);
  };

  useEffect(() => {
    console.log(" t: ", type);
    if (type !== undefined) {
      console.log(" type: ", type);
      const doFetch = async () => {
        const data = await getData(type as IDataStarWars);
        console.log(" ress: ", data.results as IFetch[]);
        setList(data.results);
      };

      doFetch();
    }
  }, [type]);

  return (
    <>
      <section className="star">
        <h1
          className="star__link"
          onClick={() => {
            changePage(pages.starWars.path);
          }}>
          Star Wars Database
        </h1>
        <nav>
          <p>List data: </p>
          <a
            className="star__link"
            href={pages.starWars.things.pathForWatch}
            onClick={() => {
              changePage(pages.starWars.things.path);
            }}>
            Things
          </a>
          <a
            className="star__link"
            href={pages.starWars.planets.pathForWatch}
            onClick={() => {
              changePage(pages.starWars.planets.path);
            }}>
            Planets
          </a>
          <a
            className="star__link"
            href={pages.starWars.starships.pathForWatch}
            onClick={() => {
              changePage(pages.starWars.starships.path);
            }}>
            Starships
          </a>
        </nav>

        <section className="list">
          {list.length !== 0 ? (
            list.map((el: any) => {
              //console.log(" el: ", el);
              return <div className="list__el"> {el.name} </div>;
            })
          ) : (
            <></>
          )}
        </section>
      </section>
    </>
  );
};

export default StarWars;
