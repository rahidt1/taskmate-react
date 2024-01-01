import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate Logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark activeTheme"></span>
        <span className="gradientOne"></span>
        <span className="gradientTwo "></span>
        <span className="gradientThree"></span>
      </div>
    </header>
  );
}
