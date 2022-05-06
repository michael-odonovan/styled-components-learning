import styled from 'styled-components'
import ImportedComponent from './ImportedComponent'
import { ChevronLeft } from '@styled-icons/entypo'

const Wrapper = styled.section`
  padding: 4rem;
  background: papayawhip;
`

const Title = styled.h3`
  color: green;
`

const Button = styled.button`
  background: ${props => props.primary? "palevioletred" : "white"};
  color: ${props => props.primary? "white" : "palevioletred"};
  padding: 0.5rem;
  border: 2px solid palevioletred;
  border-radius: 10px;
`

const SisterButton = styled(Button)`
  color: green;
`

const CustomReverseComponent = props => <Button {...props} children={props.children.split('').reverse()} />

const Link = ({ className, children }) => (
  <a className={className} href="https://www.google.com">{children}</a>
)

const StyledLink = styled(Link)`
  color: purple;
  font-weight: bold;
  display: block;
`

const StyledImportedComponent = styled(ImportedComponent)`
  color: red;
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

const Thing = styled.div`
  color: blue;

    &:hover {
      color: red; // <Thing> when hovered
    }

    & ~ & {
      background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
    }

    & + & {
      background: lime; // <Thing> next to <Thing>
    }

    &.something {
      background: orange; // <Thing> tagged with an additional CSS class ".something"
    }

    .something-else & {
      border: 1px solid; // <Thing> inside another element labeled ".something-else"
    }
`

function App() {
  return (
    <Wrapper>

      <h1>Styled Components Docs in a Nutshell</h1>

      <h3>Basic styled component:</h3>
      <Title>Colored Title</Title>

      <h3>Passing props to a Styled Component:</h3>
      <Button>normal button</Button>
      <Button primary>button passing props</Button>

      <h3>Extending a Styled Component:</h3>
      <Button>normal button</Button>
      <SisterButton>sister button</SisterButton>

      <h3>passing Button styles to a link:</h3>
      <Button as="a" href="https://www.google.com">link with Button styles</Button>

      <h3>passing Button styles to a CustomReverseButton:</h3>
      <Button as={CustomReverseComponent}>Reverse Button</Button>

      <h3>Styling a custom component using className prop</h3>
      <StyledLink>StyledLink, a custom component</StyledLink>

      <h3>Styling an imported component with className prop</h3>
      <StyledImportedComponent>Styled Imported Component</StyledImportedComponent>

      <h3>You can pass props to a Styled Component and to the DOM:</h3>
      <Input defaultValue="hello" types="text"/>
      <Input defaultValue="welcome" type="text" inputColor="rebeccapurple"/>

      <h3>Combining with CSS pseudoelements, pseudoselectors, and nesting:</h3>
      <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>

      <h1>Up to <a href="https://styled-components.com/docs/basics#pseudoelements-pseudoselectors-and-nesting">here</a></h1> 


      <h1>Other Knowledge =============</h1>
      <h3>Using with Styled Icons package:</h3>
      <ChevronLeft size="30" />

    </Wrapper>
  );
}

export default App;
