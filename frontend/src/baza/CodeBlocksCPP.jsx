import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp'
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React from "react";


SyntaxHighlighter.registerLanguage('cpp', cpp);


const SyntaxHightlighterCPP = (props) => {
    return(
        <SyntaxHighlighter style={ stackoverflowLight } wrapLongLines={true} customStyle={{borderRadius: 5}} >
            {props.code}
        </SyntaxHighlighter>
    )
}

export default SyntaxHightlighterCPP