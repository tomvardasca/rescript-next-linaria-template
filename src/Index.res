module Styles = %css(
  let title = css`
      font-size: 1.875rem;
      line-height: 2.25rem;
      font-weight: 600;
    ` 

  let p = css`
    margin-bottom: 0.5rem;
  `

  let subTitle = css`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    margin-top: 1.25rem;
  `
);

let default = () =>
  <div>
    <h1 className=Styles.title> {"What is this about?"->React.string} </h1>
    <p className=Styles.p>
      {React.string(j`This is a simple template for a Next
      project using ReScript & linaria.`)}
    </p>
    <h2 className=Styles.subTitle> {React.string("Quick Start")} </h2>
    <pre>
      {React.string(j`git clone https://github.com/ryyppy/nextjs-default.git my-project
cd my-project
rm -rf .git`)} //github.com/ryyppy/nextjs-default.git my-project
    </pre>
  </div>
