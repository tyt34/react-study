import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./card-helper.scss";

const arrOptionHelp = [
  [
    "1",
    "https://mobimg.b-cdn.net/v3/fetch/02/02ce16fa768cba3a4d5d1175b4f9622b.jpeg",
  ],
  [
    "2",
    "https://mobimg.b-cdn.net/v3/fetch/6a/6a43fdfc80f199ae40bdd0b8cf3cae69.jpeg",
  ],
  [
    "3",
    "https://mobimg.b-cdn.net/v3/fetch/3a/3a2406d98c03df12af573df88d6ea014.jpeg",
  ],
  [
    "4",
    "https://img2.akspic.ru/previews/1/1/0/0/7/170011/170011-motocikl-aksessuary_dlya_motociklov-fara-shina-koleso-x750.jpg",
  ],
  [
    "5",
    "data:image/jpeg;base64,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",
  ],
  [
    "6",
    "https://images.wallpapershq.com/wallpapers/7393/thumbnail_350x622.jpg",
  ],
  [
    "7",
    "https://mobimg.b-cdn.net/v3/fetch/bd/bdf2e1b072187f2515b8b7e63fd4a6ca.jpeg?h=900&r=0.5",
  ],
  [
    "8",
    "https://mobimg.b-cdn.net/v3/fetch/81/81c9296af639c0970bf56b6218fc0ea6.jpeg?h=900&r=0.5",
  ],
  ["9", "https://images.wallpapershq.com/wallpapers/828/thumbnail_350x757.jpg"],
];

const CardHelper = () => {
  const [selectHelp, setSelectHelp] = useState("1");

  return (
    <>
      <section className="card-helper">
        <p className="mp">Card helper:</p>
        <div className="card-helper__options">
          <select
            className="card-helper__select"
            value={selectHelp}
            onChange={(e) => setSelectHelp(e.target.value)}>
            {arrOptionHelp.map((opt) => {
              return (
                <option key={opt[0]} value={opt[0]}>
                  {opt[0]}
                </option>
              );
            })}
          </select>

          <TextField
            sx={{
              marginLeft: "15px",
            }}
            id="outlined-multiline-static"
            label="Ready url"
            multiline
            rows={2}
            value={arrOptionHelp[+selectHelp - 1][1]}
          />
        </div>
      </section>
    </>
  );
};

export default CardHelper;