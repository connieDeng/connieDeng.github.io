// const Resume = './../../ConnieDengResume.pdf'

// Command functions
const directToAbout = () => { };
const showResume = () => {
    window.open('https://docs.google.com/document/d/1gzsvp2X0G69aaaiVfTrsPXOH7JE9qWXRmcHJMavLTWY/edit?usp=sharing', '_blank')
};

const customTerminalCommands = {
    'resume': showResume,
}



export default customTerminalCommands;