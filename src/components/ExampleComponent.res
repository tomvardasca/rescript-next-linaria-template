module Styles = %css(
  let button = css`
    background-color: light-blue;
  `
)

@react.component
let make = () => {
  let (count, setCount) = React.useState(_ => 0);
  <div>
    <button className=Styles.button onClick={(_) => setCount((c) => c+1)} >{ "Click me" -> React.string}</button>
    {j`Count: $count` -> React.string} 
  </div>
}