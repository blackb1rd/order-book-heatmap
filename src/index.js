import DashboardManager from './DashboardManager.js';
import UI from './UI.js';
import './index.scss';
import { Dropdown } from 'bootstrap';


const dm = new DashboardManager();
const ui = new UI(dm);
