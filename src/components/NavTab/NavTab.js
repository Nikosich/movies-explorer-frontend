import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navtab section" aria-label="Навигация по странице">
      <ul className="navtab__list">
        <li>
          <a href="#project" className="navtab__link">
            О&nbsp;проекте
          </a>
        </li>
        <li>
          <a href="#technologys" className="navtab__link">
            Технологии
          </a>
        </li>
        <li>
          <a href="#me" className="navtab__link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
