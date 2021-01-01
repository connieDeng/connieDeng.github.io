import React, { Component, useState } from "react";
import Terminal from 'terminal-in-react';
import TerminalMsg from '../assets/content/custom-terminal/custom-terminal-beg-msg'
import CustomTerminalCommands from '../assets/content/custom-terminal/custom-terminal-commands'
import CustomTerminalDescriptions from '../assets/content/custom-terminal/custom-terminal-descriptions'

import '../assets/scss/_terminal.scss';

const CustomTerminal = () => {
    const terminalBegMessage = TerminalMsg;
        
    return (
      <div className='custom-terminal'>
        <Terminal
          color='#f2f2f7'
          allowTabs	= {false}
          backgroundColor='#3a3a3c'
          barColor='#e5e5ea'
          prompt = 'white'
          style={{ fontSize: "1em" }}
          commands={CustomTerminalCommands}
          descriptions={CustomTerminalDescriptions}
          actionHandlers={{
            //takes away default
            handleClose: (toggleClose) => {},
            handleMaximise: (toggleMaximise) => {},
            handleMinimise: (toggleMinimise) => {}
          }}
          msg = {terminalBegMessage}
        />
      </div>
    );

}; export default CustomTerminal;