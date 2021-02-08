open Jest;
open ReactTestingLibrary;
open JestDom;

test("Component renders hook", () => {
   let result = <ExampleComponent /> |> render;

    result |> getByText(~matcher=#RegExp(%re("/Count: 0/"))) |> expect |> toBeInTheDocument
});

test("Component renders hook click", () => {
   let result = <ExampleComponent /> |> render;

    act(() =>
      result |> getByText(~matcher=#RegExp(%re("/Click me/"))) |> FireEvent.click |> ignore
    );

    result |> getByText(~matcher=#RegExp(%re("/Count: 1/"))) |> expect |> toBeInTheDocument
});