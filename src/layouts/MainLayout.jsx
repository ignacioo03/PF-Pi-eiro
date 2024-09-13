import "./MainLayout.css";

export const MainLayout = ({ titulo, children }) => {
  return (
    <div>
      <h2 className="titulo-ilc">{titulo}</h2>
      <div className="container">{children}</div>
    </div>
  );
};
