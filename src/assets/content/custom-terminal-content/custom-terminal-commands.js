const showMsg = () => 'Hellddo World';
const Resume = './../../ConnieDengResume.pdf'

const directToAbout = () => { };

const customTerminalCommands = {
    showmsg: showMsg,
    'resume': () => window.open({Resume}, '_blank'),
}



export default customTerminalCommands;