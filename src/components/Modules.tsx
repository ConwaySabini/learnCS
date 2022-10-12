import { PrismTheme } from '@mantine/prism'
import Arrays from './Modules/Arrays/Arrays'
import BFS from './Modules/BFS/BFS'
import BinarySearch from './Modules/BinarySearch/BinarySearch'
import DFS from './Modules/DFS/DFS'
import Graphs from './Modules/Graphs/Graphs'
import LinkedLists from './Modules/LinkedLists/LinkedLists'
import Prefix from './Modules/Prefix/Prefix'
import ShortestPath from './Modules/ShortestPath/ShortestPath'
import Sorting from './Modules/Sorting/Sorting'
import Stacks from './Modules/Stacks/Stacks'
import Strings from './Modules/Strings/Strings'
import Trees from './Modules/Trees/Trees'
import Trie from './Modules/Trie/Trie'
import TwoPointers from './Modules/TwoPointers/TwoPointers'
import Union from './Modules/Union/Union'

interface ModulesProps {
  display: string
  codeTheme: PrismTheme
}

const Modules = ({ display, codeTheme }: ModulesProps) => {
  if (display === 'Arrays') return <Arrays codeTheme={codeTheme}></Arrays>
  else if (display === 'Trie') return <Trie codeTheme={codeTheme}></Trie>
  else if (display === 'Trees') return <Trees codeTheme={codeTheme}></Trees>
  else if (display === 'Union') return <Union codeTheme={codeTheme}></Union>
  else if (display === 'TwoPointers')
    return <TwoPointers codeTheme={codeTheme}></TwoPointers>
  else if (display === 'Stacks') return <Stacks codeTheme={codeTheme}></Stacks>
  else if (display === 'Sorting')
    return <Sorting codeTheme={codeTheme}></Sorting>
  else if (display === 'ShortestPath')
    return <ShortestPath codeTheme={codeTheme}></ShortestPath>
  else if (display === 'Prefix') return <Prefix codeTheme={codeTheme}></Prefix>
  else if (display === 'LinkedLists')
    return <LinkedLists codeTheme={codeTheme}></LinkedLists>
  else if (display === 'Graphs') return <Graphs codeTheme={codeTheme}></Graphs>
  else if (display === 'DFS') return <DFS codeTheme={codeTheme}></DFS>
  else if (display === 'BinarySearch')
    return <BinarySearch codeTheme={codeTheme}></BinarySearch>
  else if (display === 'BFS') return <BFS codeTheme={codeTheme}></BFS>
  else if (display === 'BackTracking') return <BFS codeTheme={codeTheme}></BFS>
  else if (display === 'Strings')
    return <Strings codeTheme={codeTheme}></Strings>

  return <></>
}

export default Modules
