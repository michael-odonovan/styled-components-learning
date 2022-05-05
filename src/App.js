import styled from 'styled-components'
import ImportedComponent from './ImportedComponent'

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

    </Wrapper>
  );
}

export default App;
