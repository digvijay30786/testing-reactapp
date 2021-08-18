export default function Question({Qa})
{
    return (<>
        <h1 data-testid="ques" >Question is : {Qa.q}</h1>
        <h1 data-testid="ans">Answer is : { Qa.a}</h1>
    </>);
}