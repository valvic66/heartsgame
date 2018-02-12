import React from 'react';
import './index.css';

import Numbers from '../../dumb/Numbers';
import Answer from '../../dumb/Answer';
import Hearts from '../../dumb/Hearts';
import ButtonStars from '../../dumb/ButtonStars';
import Button from '../../dumb/Button';

import _ from 'lodash';

import Board from '../Board';


export default class Game extends React.Component {
    state = {
        randomNoStars: 1 + Math.floor(Math.random() * 9),
        selectedNumbers: [], 
        numbers: _.range(1, 10),
        hasError: false,
        // showText: true,
        isAnswerCorrect: null,
        refreshLimit: 5,
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    selectNumbers = (number) => {
        this.setState(prevState => ({
            numbers: prevState.numbers.filter(elem => elem !== number),
            selectedNumbers: prevState.selectedNumbers.concat(number),
            isAnswerCorrect: null
        }));
    }
    
    unselectNumbers = (number) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.filter(elem => elem !== number),
            numbers: prevState.numbers.concat(number),
            isAnswerCorrect: null
        }));
    }

    generateStars = () => {
        if (this.state.refreshLimit === 0) { return; }
            
        this.setState(prevState => ({
            randomNoStars: 1 + Math.floor(Math.random() * 9),
            refreshLimit: prevState.refreshLimit - 1
        }));
    }

    analyseAnswer = () => {
        if (this.state.selectedNumbers.length === 0) { return; }

        if (this.state.randomNoStars === this.state.selectedNumbers.reduce((acc, val) => acc + val, 0)) {
            this.setState ({
                isAnswerCorrect: true
            });
        } else {
            this.setState ({
                isAnswerCorrect: false
            });
        }
    }

    onAnswerTrue = () => {
        this.setState (prevState => ({
            selectedNumbers: [],
            isAnswerCorrect: null,
            randomNoStars: 1 + Math.floor(Math.random() * 9),

        }));
    }

    render () {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        const { 
            selectedNumbers, 
            numbers, 
            randomNoStars, 
            showText, 
            isAnswerCorrect, 
            refreshLimit 
        } = this.state

        return (
            <div className="container">
                <div className="row">
                    <Hearts 
                        randomNoStars={randomNoStars}
                        showText={showText}
                    />
                    <div className="buttongroup">
                        <Button 
                            analyseAnswer={this.analyseAnswer}
                            isAnswerCorrect={isAnswerCorrect}
                            onAnswerTrue={this.onAnswerTrue}
                            selectedNumbers={selectedNumbers}
                            />
                        <ButtonStars
                            randomNoStars={randomNoStars}
                            generateStars={this.generateStars}
                            refreshLimit={refreshLimit}
                        />
                    </div>
                    <Numbers 
                        numbers={_.sortBy(numbers)}
                        selectNumbers={this.selectNumbers} />
                    <Answer 
                        selectedNumbers={_.sortBy(selectedNumbers)} 
                        unselectNumbers={this.unselectNumbers}
                    />
                </div><br />
                <div className="row">
                </div>
                <div className="row">
                    <Board />
                </div>
            </div>
        );
    }
}