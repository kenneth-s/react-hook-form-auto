import { configure } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18'
// import './_mutationObserverHack.js'

configure({ adapter: new Adapter() })
