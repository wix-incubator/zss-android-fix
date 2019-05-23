import React, {Component, Fragment} from 'react'
import { Button } from 'react-bootstrap';
import NoFixEditor from "./NoFixDraftEditor";
import FixedEditor from "./DraftEditorWithFixForAndroid";

const noFixText = 'No android fix';
const fixText = 'android fix';
class App extends Component {

  constructor() {
    super();
    this.state = {
      withAndroidFix: true
    }
  }

  changeEditor = () => {
    const editorType = !this.state.withAndroidFix;
    this.setState({
      withAndroidFix: editorType,
    })
  };

  render() {
    const buttonText = (this.state.withAndroidFix) ? fixText : noFixText;
    const editor = (this.state.withAndroidFix) ? <FixedEditor /> : <NoFixEditor />;
    return (
      <Fragment>
        <h1>DraftJS Rich Example</h1>
        <Button variant="primary" onClick={this.changeEditor}>{buttonText}</Button>
        <h1>   </h1>
        {editor}
      </Fragment>
    );
  }
}

export default App
