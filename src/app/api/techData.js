const jsIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
const reactLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
const tsLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
const nextLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
const gitLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
const taiwindLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
const cssLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"
const htmlLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"
const muiLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"

const getTechStack = () => ([
  {
    name: 'React',
    image: reactLogo
  },
  {
    name: 'JavaScript',
    image: jsIcon
  },
  {
    name: 'TypeScript',
    image: tsLogo
  },
  {
    name: 'NextJs',
    image: nextLogo
  },
  {
    name: 'GIT',
    image: gitLogo
  },
  {
    name: 'Taiwindcss',
    image: taiwindLogo
  },
  {
    name: 'CSS3',
    image: cssLogo
  },
  {
    name: 'HTML5',
    image: htmlLogo
  },
  {
    name: 'MaterialUI',
    image: muiLogo
  }
])

const profileData = {
  getTechStack
}

export default profileData

