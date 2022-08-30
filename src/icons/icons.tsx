import React from "react";
import Icons from "./icons.svg";
import PropTypes from "prop-types";

//From https://stackoverflow.com/a/42296853

const Icon = ({ name, color, size, stroke }: IconProps) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size} strokeWidth={stroke}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);


type IconProps = { name: string, color?: string, size?: number, stroke?: number }

export default Icon;
