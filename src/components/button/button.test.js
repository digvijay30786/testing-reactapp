import { render, screen,fireEvent} from '@testing-library/react';
import Button from './button';
import Renderer from 'react-test-renderer';





describe("button.jsx testing", () => {

    test('button should we render without errors', () =>
    {
        const text = "ADD";
        render(<Button onClick={() => { }} label={text} />);
        
        const data = screen.getByTestId('btn');

        expect(data.textContent).toBe(text);

    });



    it("count the click when click the div", () => {
        const fn = jest.fn();
        const text = "CLICK ME";
        render(<Button onClick={fn} label={text} />);
        const btn = screen.getByTestId('btn');
        fireEvent.click(btn);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledTimes(1);

        fireEvent.click(btn);
        fireEvent.click(btn);
        fireEvent.click(btn);

        expect(fn).toHaveBeenCalledTimes(4);
    });

    it("Take a snap Shot", () => {
        const snapshot = Renderer.create(
            <Button onClick={()=>{}} label="Button"/>
        );
        
        expect(snapshot.toJSON()).toMatchSnapshot();
    })
    
})
