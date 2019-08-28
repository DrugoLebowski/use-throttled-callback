// Vendor
import * as React from "react";
import * as ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";

// Internal
import { MockComponent } from "./__mocks__";

describe("useThrottledCallback", () => {
  let container: HTMLElement | null = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  it("should throttle callback on second click", () => {
    // Arrange
    const textToUse = "42";
    const milliseconds = 1000;
    let content = "";

    // Act
    act(() => {
      ReactDOM.render(
        <MockComponent
          cb={() => {
            content += textToUse;
          }}
          millisecods={milliseconds}
        />,
        container
      );

      const button = document.querySelector("button");

      if (button) {
        act(() => {
          Simulate.click(button);
          Simulate.click(button);
        });
      }
    });

    // Assert
    expect(content).toEqual(textToUse);
  });

  it("should not throttle callback on the second click", () => {
    jest.useFakeTimers();

    // Arrange
    const incrementingValue = 10;
    const milliseconds = 1000;
    let content = 0;

    // Act
    act(() => {
      ReactDOM.render(
        <MockComponent
          cb={() => {
            content += incrementingValue;
          }}
          millisecods={milliseconds}
        />,
        container
      );
    });

    const button = document.querySelector("button");

    if (button) {
      act(() => {
        Simulate.click(button);

        jest.runAllTimers();

        Simulate.click(button);
      });
    }

    // Assert
    expect(content).toEqual(incrementingValue * 2);
  });

  afterEach(() => {
    if (container !== null) {
      document.body.removeChild(container);
    }

    container = null;
  });
});
