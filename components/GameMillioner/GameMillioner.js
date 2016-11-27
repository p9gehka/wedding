import { Button } from 'react-mdl';
import React from 'react';
import { st, questionST, buttonsSt, inD} from './style';
const asksData = [
    {
        ask: 'adfasdfasdfasdfasdfasdfasdfasdfasdfsadfadsfdasdf?',
        answers:['hello', 'by', 'wrong', 'world'],
        correct: 0 
    }

];
class GameMillioner extends React.Component {
    constructor() {
        super();
        this.state = {
            question: 0,
        };
    }
    render() {
        const question = this.state.question;
        const ans = asksData[question].answers;
        const buttons = ans.map((q, i) => <Button key={`answer_${i}`} raised colored ripple>{q}</Button>);
        return (<div style={st}>
            <div style={questionST}>
                <div style={inD}>
                    <div>
                        {asksData[question].ask}
                    </div>
                </div>
                <div style={buttonsSt}>
                    {buttons}
                </div>
            </div>

        </div>);
    }
}

export default GameMillioner;