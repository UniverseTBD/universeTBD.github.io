import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";

import PresentationView from "@/views/Presentation/PresentationView.vue";
import ParticipantsView from "@/views/peoples/participants.vue";
import JoinUsView from "@/views/peoples/joinus.vue";

const globalStubs = {
  DefaultNavbar: true,
  DefaultFooter: true,
  Header: true,
  TypewriterText: true,
  PresentationCounter: true,
  Product: true,
  AboutTeam: true,
  "font-awesome-icon": true,
};

const mountComponent = (component) =>
  shallowMount(component, {
    global: {
      stubs: globalStubs,
    },
  });

describe("body class composable integration", () => {
  beforeEach(() => {
    document.body.className = "";
  });

  it("cleans up Participants view body classes", () => {
    const wrapper = mountComponent(ParticipantsView);

    expect(document.body.classList.contains("about-us")).toBe(true);
    expect(document.body.classList.contains("bg-gray-200")).toBe(true);

    wrapper.unmount();

    expect(document.body.classList.contains("about-us")).toBe(false);
    expect(document.body.classList.contains("bg-gray-200")).toBe(false);
  });

  it("cleans up JoinUs view body classes", () => {
    const wrapper = mountComponent(JoinUsView);

    expect(document.body.classList.contains("about-us")).toBe(true);
    expect(document.body.classList.contains("bg-gray-200")).toBe(true);

    wrapper.unmount();

    expect(document.body.classList.contains("about-us")).toBe(false);
    expect(document.body.classList.contains("bg-gray-200")).toBe(false);
  });

  it("cleans up Presentation view classes and listeners", () => {
    const addSpy = vi.spyOn(window, "addEventListener");
    const removeSpy = vi.spyOn(window, "removeEventListener");

    const wrapper = mountComponent(PresentationView);
    const resizeCall = addSpy.mock.calls.find(([event]) => event === "resize");

    expect(document.body.classList.contains("presentation-page")).toBe(true);
    expect(document.body.classList.contains("bg-gray-200")).toBe(true);
    expect(resizeCall).toBeTruthy();

    wrapper.unmount();

    expect(document.body.classList.contains("presentation-page")).toBe(false);
    expect(document.body.classList.contains("bg-gray-200")).toBe(false);
    expect(removeSpy).toHaveBeenCalledWith("resize", resizeCall[1]);
  });
});
