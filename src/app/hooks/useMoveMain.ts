import { pages } from "../route/app";
import { useNavigate } from "react-router-dom";

export const useMoveMain = (page = pages.nav.path) => {
  const navigate = useNavigate();

  const changePage = (): void => {
    navigate(page);
  };

  return changePage;
};
