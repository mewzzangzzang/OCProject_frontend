function navbar() {
  return (
    <nav className="navbar">
      <div className="menu p-4 mt-1 m-5">
        <a href={`/`}>
          <div className="icon pt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="currentColor"
              className="bi bi-graph-up-arrow"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
              />
            </svg>
          </div>
        </a>
        <h3 className="menulist pt-5">
          <a href={`/Page2`}>출하량</a>
        </h3>
        <h3 className="menulist pt-5">
          <a href={`/Page3`}>수입</a>
        </h3>
        <h3 className="menulist pt-5">
          <a href={`/Page4`}>수출</a>
        </h3>

        <h3 className="menulist pt-5">
          <a href={`/Page5`}>트랜드</a>
        </h3>

        <h3 className="menulist pt-5">
          <a href={`/login`}>유저</a>
        </h3>
      </div>

      <div className="search shadow"></div>
    </nav>
  );
}

export default navbar;
