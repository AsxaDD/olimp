import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React from "react";


SyntaxHighlighter.registerLanguage('python', python);


const MySyntaxHightlighter = (props) => {
    return(
        <SyntaxHighlighter style={ stackoverflowLight } wrapLongLines={true} customStyle={{borderRadius: 5}} >
            {props.code}
        </SyntaxHighlighter>
    )
}

export default MySyntaxHightlighter