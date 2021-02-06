module Link = Next.Link

module Styles = %css(
  let sm =	`(min-width: 640px)`
  let md =	`(min-width: 768px)`
  let lg =	`(min-width: 1024px)`
  let xl =	`(min-width: 1280px)`
  let xl2 =	`(min-width: 1536px)`

  let height = 3


  let nav = css`
      padding: 0.5rem;
      height: ${height}rem;
      display: flex;
      border-bottom-width: 1px;
      border-color: rgba(229, 231, 235, 1);
      justify-content: space-between;
      align-items: center;
      font-size: 0.875rem;
      line-height: 1.25rem;
    `
  let logo = css`
    display: flex;
    align-items: center;
    width: 33.333333%;

    > img {
      width: 1.25rem;
    }

    > span {
      font-size: 1.25rem;
      line-height: 1.75rem;
      margin-left: 0.5rem;
      vertical-align: middle;
      font-weight: 600;

      > span {
        color: #9c4221;
      }
    }
  `

  let links = css`
    display: flex;
    width: 66.666667%;
    justify-content: flex-end;

    > a {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }

    > a:last-child {
      font-weight: 700;
    }
  `

  let container = css`
    display: flex;
    min-width: 20rem;

    @media ${lg} {
      justify-content: center;
    }

    > div {
      max-width: 64rem;
      width: 100%;
      color: rgba(17, 24, 39, 1);
      font-weight: 400;

      @media ${lg} {
        width: 75%;
      }

      main {
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
      }
    }
  `
)

module Navigation = {
  @react.component
  let make = () =>
    <nav className=Styles.nav>
      <Link href="/">
        <a className=Styles.logo>
          <img src="/static/zeit-black-triangle.svg" />
          <span>
            {React.string("Next")} <span> {React.string("RE")} </span>
          </span>
        </a>
      </Link>
      <div className=Styles.links>
        <Link href="/"> <a> {React.string("Home")} </a> </Link>
        <Link href="/examples"> <a> {React.string("Examples")} </a> </Link>
        <a target="_blank"
          href="https://github.com/tomvardasca/nextjs-default">
          {React.string("Github")}
        </a>
      </div>
    </nav>
}

@react.component
let make = (~children) => {
  <div className=Styles.container>
    <div>
      <Navigation /><main>children</main>
    </div>
  </div>
}
