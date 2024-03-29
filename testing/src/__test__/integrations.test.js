import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "../Root";
import App from "../components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [
      { name: "Fetched #1" },
      { name: "Fetched #2" },
      { name: "Fetched #3" },
    ],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", (done) => {
  let wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  wrapper.find(".fetch-comments").simulate("click");

  moxios.wait(() => {
    wrapper.update();

    expect(wrapper.find("li").length).toEqual(3);

    done();
    wrapper.unmount();
  });
});
