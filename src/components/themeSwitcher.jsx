import React from "react";
import PropTypes from "prop-types";

const ThemeSwitcher = ({setIsDark, isDark}) => (
    <label className="checkbox-ios" title="Switch theme">
      <input type="checkbox" className="switchTheme" checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
      <span className="checkbox-ios-switch"/>
    </label>
  )

ThemeSwitcher.propTypes = {
  setIsDark: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
};

export default ThemeSwitcher;

