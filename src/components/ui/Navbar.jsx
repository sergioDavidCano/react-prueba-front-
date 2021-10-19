import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { startLogout } from "../../redux/actions/auth";
export const Navbar = () => {
  const history = useHistory();
  const { t, i18n } = useTranslation("global");
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(startLogout());
  };
  const handleEspañol = () => {
    i18n.changeLanguage("es")
    moment.locale('es')
  }
  const handleIngles = () => {
    i18n.changeLanguage("en");
    moment.locale('en') 
  }
  const handleRender = () => {
    history.push('/pokemons')
  }
  const handleRenderTable = () => {
    history.push('/table')
  }
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">{name}</span>
      <button
        className="btn btn-outline-success"
        onClick={handleRender}
      >
        <span> {t("navbar.react-saga-text")}</span>
      </button>
      <button
        className="btn btn-outline-success"
        onClick={handleRenderTable }
      >
        <span> Table</span>
      </button>
      <button
        className="btn btn-outline-success"
        onClick={handleEspañol}
      >
        <i className="fas fa-solid fa-language"></i>
        <span> {t("navbar.spanish")}</span>
      </button>
      <button
        className="btn btn-outline-success"
        onClick={handleIngles}
      >
        <i className="fas fa-solid fa-language"></i>
        <span> {t("navbar.english")}</span>
      </button>
      <button className="btn btn-outline-danger" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i>
        <span> {t("navbar.get-out")}</span>
      </button>
    </div>
  );
};
