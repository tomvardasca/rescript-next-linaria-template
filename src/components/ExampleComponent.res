@react.component
let make = () => {
  let (count, setCount) = React.useState(_ => 0);
  <div>
    <button onClick={(_) => setCount((c) => c+1)} >{ "Click me" -> React.string}</button>
    {j`Count: $count` -> React.string} 
  </div>
}