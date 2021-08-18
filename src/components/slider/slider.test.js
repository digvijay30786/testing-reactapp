import { render, screen,fireEvent} from '@testing-library/react';
import Slider from './slider';

const testid =
{
    ans: "ans",
    ques: "ques",
    prev:"prev",
    next:"next"
}
describe("Find the Correct Answer", () => {
    it("click any next or prev button data shows accordinly", () => {
        render(<Slider />);

        const prev = screen.getByTestId(testid.prev);
        const next = screen.getByTestId(testid.next);
        const ques = screen.getByTestId(testid.ques);
        const ans = screen.getByTestId(testid.ans);
        
        //expect data same if you click prev button first time because fisrt time prev is disabled so no effect show on click event
        fireEvent.click(prev);
        expect(ques.textContent).toBe("Question is : what is the capital of India ?");
        expect(ans.textContent).toBe("Answer is : New Delhi");

        fireEvent.click(prev);
        expect(ques.textContent).toBe("Question is : what is the capital of India ?");
        expect(ans.textContent).toBe("Answer is : New Delhi");

        fireEvent.click(prev);
       expect(ques.textContent).toBe("Question is : what is the capital of India ?");
        expect(ans.textContent).toBe("Answer is : New Delhi");

        fireEvent.click(prev);
        expect(ques.textContent).toBe("Question is : what is the capital of India ?");
        expect(ans.textContent).toBe("Answer is : New Delhi");
        

        fireEvent.click(next);
        expect(ques.textContent).toBe("Question is : React is a framework or library");
        expect(ans.textContent).toBe("Answer is : Library");


        fireEvent.click(next);
        fireEvent.click(next);
        expect(ques.textContent).toBe("Question is : what is the latest version of react js ?");
        expect(ans.textContent).toBe("Answer is : 17.0.2");


        fireEvent.click(next);
        fireEvent.click(next);
        fireEvent.click(next);
        fireEvent.click(next);
        expect(ques.textContent).toBe("Question is : Who is original author of Reactjs ?");
        expect(ans.textContent).toBe("Answer is : Jordan Walke");
        //screen.debug();
    })
})

