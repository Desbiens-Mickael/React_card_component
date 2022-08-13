import './App.css';
import styled from "styled-components";
import CardList from "./components/CardList"
import technologies from './data';

const Container = styled.div`
  background-color: #FFFFFF;
  min-height: 100vh;
`;

function App() {
  return (
    <Container>
      <CardList data={technologies}/>
    </Container>
  );
}

export default App;
