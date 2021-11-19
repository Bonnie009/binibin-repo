import styled from 'styled-components';
import BoldText from '../BoldText';
import EntryItem from '../EntryItem';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const EntryAdded = ({
  item_name="Garbage",
  waste_type="garbage",
  note="Example: two snack wrappers, dried gluestick, and pencil shavings",
  unit="g"
}) => {
  <Popup trigger={<button>Open Popup</button>} modal>
    <BoldText text="Added Entries"/>
    <div>
      {added?
      added.map((o,i)=>(
        <div key={i}>
        </div>
      )): <p>No added entries. Come back after you add your first entry!</p>}
    </div>
  </Popup>
}

export default EntryAdded;
