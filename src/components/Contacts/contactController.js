const linkedIn_URL='https://www.linkedin.com/in/kapillondhe/';
const github_URL='https://github.com/kapillondhe';
const mail='kapillondhe25@gmail.com';

const handleGIT=(e)=>{
    e.preventDefault();
    const newTab = window.open(github_URL, '_blank');
    newTab.focus();
}

const handleLI=(e)=>{
    e.preventDefault();
    const newTab = window.open(linkedIn_URL, '_blank');
    newTab.focus();
}

const handleEmail=(e)=>{
    e.preventDefault();
    const mailtoLink = `mailto:${mail}`;
    window.open(mailtoLink, '_blank');
}

export {handleGIT, handleLI, handleEmail};