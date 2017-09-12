import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputText: '',
            helpText: '# This is an <h1> tag \n## This is an <h2> tag\n###### This is an <h6> tag\n*This text will be italic*\n_This will also be italic_\n**This text will be bold**\n__This will also be bold__\n_You **can** combine them_'
        }
    }
    textAreaBox = (event) => {
        this.setState({
            inputText: event.target.value
        });
    }
    render(){
        let helpText = this.state.helpText;
        return (
            <div>
                <h1>Markdown Previewer</h1>
                <div id="container">
                    <div id="textareaBox">
                        <textarea placeholder="Write your Markdown here..." value={this.state.inputText} onChange={this.textAreaBox}></textarea>
                    </div>
                    <div id="outputBox">
                        <div dangerouslySetInnerHTML={{__html: marked(this.state.inputText)}}></div>
                    </div>
                    <div id="helpBox">{helpText.split("\n").map(list => {
                        return <div>{list}</div>
                    })}</div>
                </div>
            </div>
        )
    }
}

export default App;
