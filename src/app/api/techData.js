import reactLogo from '../../../public/logos/react.png'
import cppLogo from '../../../public/logos/cpp.png'
import jsLogo from '../../../public/logos/js.png'
import tsLogo from '../../../public/logos/ts.png'
import dockerLogo from '../../../public/logos/docker.png'
import nextLogo from '../../../public/logos/nextJs.png'
import githubLogo from '../../../public/logos/githubLogo.png'

const getTechStack = () => ([
  {
    name: 'React',
    image: reactLogo
  },
  {
    name: 'C++',
    image: cppLogo
  },
  {
    name: 'JavaScript',
    image: jsLogo
  },
  {
    name: 'TypeScript',
    image: tsLogo
  },
  {
    name: 'Docker',
    image: dockerLogo
  },
  {
    name: 'NextJs',
    image: nextLogo
  },
  {
    name: 'Github',
    image: githubLogo
  }
])

const profileData = {
  getTechStack
}

export default profileData

