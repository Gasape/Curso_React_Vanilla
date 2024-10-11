import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas en <GifExpertApp />', () => {
    

    test('debe de hace match con el snapshot', () => { 

        const {container} = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();

    });

    test('El formulario esta creando una nueva categoria', () => { 
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');

        const form = screen.getByRole('form');

        const inputValue = 'Bunny girl senpai';

        fireEvent.input( input, {target : { value: inputValue}});

        fireEvent.submit(form);

        expect( screen.getByText(inputValue).textContent ).toContain(inputValue);
        // screen.debug();

    })

    test('El formulario no esta creando una categoria que ya existe', () => { 
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');

        const form = screen.getByRole('form');

        const inputValue = 'Bunny girl senpai';

        fireEvent.input( input, {target : { value: inputValue}});

        fireEvent.submit(form);

        fireEvent.input( input, {target : { value: inputValue}});

        fireEvent.submit(form);

        expect( screen.getAllByText(inputValue).length ).toBe(1);
        // screen.debug();

    })
});