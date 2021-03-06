// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Jest from "@glennsl/bs-jest/src/jest.js";
import * as Curry from "bs-platform/lib/es6/curry.mjs";
import * as React from "react";
import * as JestDom from "bs-jest-dom/src/JestDom.js";
import * as ExampleComponent from "../../components/ExampleComponent.js";
import * as ReactTestingLibrary from "@tomvardasca/rescript-react-testing-library/src/ReactTestingLibrary.js";

Jest.test("Component matches snapshot", (function (param) {
        return Jest.Expect.toMatchSnapshot(Jest.Expect.expect(ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(ExampleComponent.make, {})).container));
      }));

Jest.test("Component renders hook", (function (param) {
        var result = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(ExampleComponent.make, {}));
        var partial_arg_1 = /Count: 0/;
        var partial_arg = {
          NAME: "RegExp",
          VAL: partial_arg_1
        };
        var arg = function (param, param$1) {
          return ReactTestingLibrary.getByText(partial_arg, param, param$1);
        };
        return JestDom.toBeInTheDocument(expect(Curry._2(arg, undefined, result)));
      }));

Jest.test("Component renders hook after click", (function (param) {
        var result = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(ExampleComponent.make, {}));
        ReactTestingLibrary.act(function (param) {
              var arg = ReactTestingLibrary.FireEvent.click;
              var partial_arg_1 = /Click me/;
              var partial_arg = {
                NAME: "RegExp",
                VAL: partial_arg_1
              };
              var arg$1 = function (param, param$1) {
                return ReactTestingLibrary.getByText(partial_arg, param, param$1);
              };
              Curry._2(arg, undefined, Curry._2(arg$1, undefined, result));
              
            });
        var partial_arg_1 = /Count: 1/;
        var partial_arg = {
          NAME: "RegExp",
          VAL: partial_arg_1
        };
        var arg = function (param, param$1) {
          return ReactTestingLibrary.getByText(partial_arg, param, param$1);
        };
        return JestDom.toBeInTheDocument(expect(Curry._2(arg, undefined, result)));
      }));

export {
  
}
/*  Not a pure module */
