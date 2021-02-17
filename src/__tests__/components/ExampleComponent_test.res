open Jest
open Expect
open ReactTestingLibrary

test("Component matches snapshot", () => {
  
  <ExampleComponent /> |> render |> container |> expect |> toMatchSnapshot
})

test("Component renders hook", () => {
  open JestDom

  let result = <ExampleComponent /> |> render

  result |> getByText(~matcher=#RegExp(%re("/Count: 0/"))) |> expect |> toBeInTheDocument
})

test("Component renders hook after click", () => {
  open JestDom
  let result = <ExampleComponent /> |> render

  act(() => result |> getByText(~matcher=#RegExp(%re("/Click me/"))) |> FireEvent.click |> ignore)

  result |> getByText(~matcher=#RegExp(%re("/Count: 1/"))) |> expect |> toBeInTheDocument
})
