import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData, IDataStarWars } from "../../api/start-wars/star-wars";
import { pages } from "../../route/app";
import Header from "../../component/header/header";
import { useMoveMain } from "../../hooks/useMoveMain";
import "./star-wars.scss";

type IDataElement = {
  name: string;
  mass?: string;
  gender?: string;
  eye_color?: string;

  gravity?: string;
  orbital_period?: string;
  terrain?: string;

  passengers?: string;
  starship_class?: string;
  max_atmosphering_speed?: string;
};

const StarWars = () => {
  const [list, setList] = useState([]);
  const [details, setDetails] = useState<IDataElement>({
    name: "",
    mass: "",
    gender: "",
    eye_color: "",

    gravity: "",
    orbital_period: "",
    terrain: "",

    passengers: "",
    starship_class: "",
    max_atmosphering_speed: "",
  });

  let { type, element } = useParams();

  const navigate = useNavigate();

  const changePage = (page: string): void => {
    navigate(page);
  };

  const moveStarWars = useMoveMain(pages.starWars.path);
  const moveStarWarsThings = useMoveMain(pages.starWars.things.path);
  const moveStarWarsPlanets = useMoveMain(pages.starWars.planets.path);
  const moveStarWarsStarships = useMoveMain(pages.starWars.starships.path);

  useEffect(() => {
    setDetails({ name: "" });
    if (type !== undefined) {
      const doFetch = async () => {
        const data = await getData(type as IDataStarWars);
        setList(data.results);
      };

      doFetch();
    } else {
      setList([]);
    }
    if (element !== undefined) {
      const doFetch = async () => {
        const data = await getData(type as IDataStarWars, element);
        setDetails({ ...data });
      };

      doFetch();
    }
  }, [type, element]);

  return (
    <>
      <section className="star">
        <Header />

        <h2
          className="star__link"
          onClick={() => {
            moveStarWars();
          }}>
          Star Wars Database
        </h2>
        <nav>
          <p>List data: </p>
          <a
            className="star__link"
            href={pages.starWars.things.pathForWatch}
            onClick={() => {
              moveStarWarsThings();
            }}>
            Things
          </a>
          <a
            className="star__link"
            href={pages.starWars.planets.pathForWatch}
            onClick={() => {
              moveStarWarsPlanets();
            }}>
            Planets
          </a>
          <a
            className="star__link"
            href={pages.starWars.starships.pathForWatch}
            onClick={() => {
              moveStarWarsStarships();
            }}>
            Starships
          </a>
        </nav>

        <div className="star__grid">
          <section className="list">
            {list
              ? list.map((el: { name: string }, i) => {
                  return (
                    <div
                      key={el.name}
                      className="list__el"
                      onClick={() => {
                        changePage(`/s-w-d/${type}/${i + 1}`);
                      }}>
                      {" "}
                      {el.name}{" "}
                    </div>
                  );
                })
              : null}
          </section>

          {details.name !== "" ? (
            <section className="details">
              <p>Name: {details.name}</p>
              {details.mass !== undefined ? <p>Mass: {details.mass}</p> : null}
              {details.gender !== undefined ? (
                <p>Gender: {details.gender}</p>
              ) : null}
              {details.eye_color !== undefined ? (
                <p>Eye color: {details.eye_color}</p>
              ) : null}
              {details.gravity !== undefined ? (
                <p>Gravity: {details.gravity}</p>
              ) : null}
              {details.orbital_period !== undefined ? (
                <p>Orbital period: {details.orbital_period}</p>
              ) : null}
              {details.terrain !== undefined ? (
                <p>Terrain: {details.terrain}</p>
              ) : null}
              {details.passengers !== undefined ? (
                <p>Passengers: {details.passengers}</p>
              ) : null}
              {details.starship_class !== undefined ? (
                <p>Starship class: {details.starship_class}</p>
              ) : null}
              {details.max_atmosphering_speed !== undefined ? (
                <p>Max atmosphering speed: {details.max_atmosphering_speed}</p>
              ) : null}
            </section>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default StarWars;
