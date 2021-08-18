import { render, screen,fireEvent, getAllByAltText} from '@testing-library/react';
import Counter from './counter';
const testId = {
    header: "test_counter",
    value: "test_value",
    button:"btn"
}
describe("Counter.jsx Testing", () => {
    it("Should Render Without error with init Value", () => {
        render(<Counter />);
        const heading = screen.getByTestId(testId.header);
        const value = screen.getByTestId(testId.value);
        expect(heading.textContent).toBe("Counter");
        expect(value.textContent).toBe(`0`);
    })

    it("should have reduce and add buttons", () => {
        render(<Counter />);
        const [add, reduce] = screen.getAllByTestId(testId.button);
        
        expect(add.textContent).toBe("ADD");
        expect(reduce.textContent).toBe("REDUCE");
    });

    it("should increase and descrease when clicking on button", () => {
        
        render(<Counter />);
        const value = screen.getByTestId(testId.value);
        const [add, reduce] = screen.getAllByTestId(testId.button);
        
        fireEvent.click(add);
        expect(value.textContent).toBe(`5`);

        fireEvent.click(add);
        expect(value.textContent).toBe(`10`);

        fireEvent.click(reduce);
        expect(value.textContent).toBe(`5`);

        fireEvent.click(add);
        expect(value.textContent).toBe(`10`);

        fireEvent.click(reduce);
        expect(value.textContent).toBe(`5`);

        fireEvent.click(add);
        expect(value.textContent).toBe(`10`);
    })
})