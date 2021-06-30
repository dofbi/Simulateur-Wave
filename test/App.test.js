import { mount } from "@vue/test-utils";
import Simulateur from "../src/components/simulateur";
import { default as data } from "./data";

data.forEach((montant) => {
  test(`Test Montant ${montant[0]}`, async () => {
    const wrapper = mount(Simulateur);
    const input = wrapper.find("input");
    await input.setValue(montant[0]);
    expect(wrapper.get("#montant-Recu").text()).toBe(montant[1]);
  });
});
