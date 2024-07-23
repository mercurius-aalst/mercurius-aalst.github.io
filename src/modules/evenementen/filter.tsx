import styled from "styled-components";
import { mediaQuery } from "../../assets/styling";
import { EventFilter } from "../../context/models";
import Title from "../../components/title";

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  align-items: flex-end;
`;

const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  width: 100%;
  align-items: flex-end;
  gap: 0.5rem;
  
  ${mediaQuery.medium`
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
  `}
`;

const SearchDiv = styled.div`
  width: 100%;
  max-width: 30rem;
`;
const Search = styled.input`
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  width: 100%;
  background-color: var(--gray);
  border: 1px solid #CCCCCC;

  &:focus-visible, &:focus, &:active {
    border: 1px solid #BBBBBB;
  }
`

const CheckDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
`
const Check = styled.input`
  height: 1.25rem;
  width: 1.25rem;
  background-color: var(--gray);
  border: 1px solid #CCCCCC;
  accent-color: var(--green);
  margin-left: 0.5rem;
  cursor: pointer;

  &:focus-visible, &:focus, &:active {
    border: 1px solid #BBBBBB;
  }
`;

const Filter = (props: {
  onChangeS: (newVal: string) => void;
  onChangeOP: (newVal: boolean) => void;
  filter: EventFilter;
}) => {
  return (
    <TitleDiv id="previous-events">
      <Title color="--green" text="Voorgaande evenementen" fullWidth />
      <FilterDiv>
        <CheckDiv>
          Alleen evenementen met foto-album
          <Check type="checkbox" checked={props.filter.onlyPictures} onChange={(e) => props.onChangeOP(e.target.checked)} />
        </CheckDiv>
        <SearchDiv>
          <Search type="search" value={props.filter.search} onChange={(e) => props.onChangeS(e.target.value)} placeholder="Zoek op naam of datum (YYYY-MM-DD)" />
        </SearchDiv>
      </FilterDiv>
    </TitleDiv>
  )
}

export default Filter