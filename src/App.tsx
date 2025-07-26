import { Template1 } from "./layouts/template1"
import { Template2 } from "./layouts/template2"

function App() {
  const user = {
    company: 'B'
  }

  let Template = Template1;
  switch (user.company) {
    case 'A': {
      Template = Template1;
      break;
    }
    case 'B': {
      Template = Template2;
      break;
    }
    default:
      break
  }

  return (
    <>
      <Template>
        this is content 
      </Template>

    </>
  )
}

export default App
