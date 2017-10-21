import React, { Component } from 'react';
import styled from 'styled-components';

import translate from './helper/translate';

const Container = styled.div`
    height: 100%;
    max-width: 480px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Headline = styled.h1`
    text-align: center;
`;

const Textarea = styled.textarea`
    width: 100%;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 16px;
    
    resize: none;
    border: none;
    border-radius: 4px;
    
    font-size: 1rem;
    font-family: 'PT Mono', monospace;
    
    :focus {
        outline: none;
    }
`;

const TextInput = styled(Textarea)`
    min-height: 160px;
    background: #f7f7f7;
`;

const TextOutput = styled.div`
    flex-grow: 1;
    overflow: scroll;
    background: inherit;
`;

const Footer = styled.footer`
    text-align: center; 
`;

const CopyRight = styled.p`
    font-size: 0.8rem;
`;

class App extends Component {
    state = {
        inputText: '',
        outputText: ''
    };

    handleInputChanged = event => {
        const newInputText = event.target.value;

        this.setState({
            inputText: newInputText,
            outputText: translate(newInputText)
        });
    };

    render = () => (
        <Container>
            <Headline>Morse Code Translator</Headline>
            <TextInput
                name="text-input"
                placeholder="You can write morse code or plain text in here."
                value={this.state.inputText}
                onChange={this.handleInputChanged}
            />
            <TextOutput>
                {this.state.outputText}
            </TextOutput>
            <Footer>
                <CopyRight>Luka Hartwig &copy; 2017</CopyRight>
            </Footer>
        </Container>
    );
}

export default App;
