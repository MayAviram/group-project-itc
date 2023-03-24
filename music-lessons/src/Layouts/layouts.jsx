import "./layouts.css";

export const Line = ({ children, className }) => {
  return <div className={`Line ${className || ""}`}>{children}</div>;
};

export const Column = (props) => {
  const { className: columnAddClassName = "", ...rest } = props;

  return <Line {...rest} className={`column ${columnAddClassName}`} />;
};

export const Box = ({ children, className }) => {
  return <div className={`Box ${className || ""}`}>{children}</div>;
};
export const Grid = ({ children, className }) => {
  return <div className={`Grid ${className || ""} `}>{children}</div>;
};

export const Between = (props) => {
  const { className: betweenAddClassName = "", ...rest } = props;
  return <Line {...rest} className={`between ${betweenAddClassName}`} />;
};

export const Around = (props) => {
  const { className: betweenAddClassName = "", ...rest } = props;
  return <Line {...rest} className={`around ${betweenAddClassName}`} />;
};
