import { fireEvent } from "@testing-library/react";
import App, { About, Home, NoMatch } from "./App";

import renderWithRouter from "./renderWithRouter";

describe("initial application test with full application rendering", () => {
  it("verifies if Home component renderizes (only the component)", () => {
    const { getByText } = renderWithRouter(<Home />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });

  it("verifies if About component renderizes (only the component)", () => {
    const { getByText } = renderWithRouter(<About />);
    const about = getByText(/Você está na página Sobre/i);
    expect(about).toBeInTheDocument();
  });

  it("verifies if NoMatch component renderizes (only the component)", () => {
    const { getByText } = renderWithRouter(<NoMatch />);
    const home = getByText(/Página não encontrada/);
    expect(home).toBeInTheDocument();
  });

  it("verifies if, after rendering, the Home page appear", () => {
    const { getByText } = renderWithRouter(<App />);

    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });

  it("verifies if, after click in About link, a About component renderizes", () => {
    const { getByText, history } = renderWithRouter(<App />);

    // o /Sobre/i pega texto com Sobre com case insensitive (-i)
    fireEvent.click(getByText(/Sobre/i));

    const { pathname } = history.location;
    expect(pathname).toBe("/about");
    const aboutAll = getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument();
  });

  it('verifies if, after click in Home link, a Home component renderizes', () => {
    const { getByText, history } = renderWithRouter(<App />);

    const { pathname } = history.location
    expect(pathname).toBe('/');
    
    const home = getByText('Você está na página Início');
    expect(home).toBeInTheDocument();
  });

  it("verifies if, pass no existing route, a NoMatch component renderizes", () => {
    const { history, getByText } = renderWithRouter(<App />);

    history.push("/no-match/");

    const noMatch = getByText(/Página não encontrada/);
    expect(noMatch).toBeInTheDocument();
  });
});
