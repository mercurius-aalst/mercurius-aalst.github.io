import React from "react";
import styled from "styled-components";


interface FilterProps {
  years: number[];
  months: string[];
  selectedYear: number | "";
  selectedMonth: string | "";
  onYearChange: (year: number | "") => void;
  onMonthChange: (month: string | "") => void;
}


const FilterDiv = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
`;

const Select = styled.select`
  font-size: 1rem;
  padding: 0.5rem 1.5rem 0.5rem 1rem;
  border-radius: 2rem;
  background-color: var(--gray);
  border: 1px solid #CCCCCC;
  color: var(--black);
  outline: none;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid var(--green);
  }
`;

const Label = styled.label`
  font-size: 1rem;
  color: var(--green);
  font-weight: 500;
`;

const Filter: React.FC<FilterProps> = ({ years, months, selectedYear, selectedMonth, onYearChange, onMonthChange }) => (
  <FilterDiv>
    <Label htmlFor="year-select">Jaar:</Label>
    <Select id="year-select" value={selectedYear} onChange={e => onYearChange(e.target.value ? Number(e.target.value) : "") }>
      <option value="">Alle jaren</option>
      {years.map(y => <option key={y} value={y}>{y}</option>)}
    </Select>
    <Label htmlFor="month-select">Maand:</Label>
    <Select id="month-select" value={selectedMonth} onChange={e => onMonthChange(e.target.value)}>
      <option value="">Alle maanden</option>
      {months.map(m => <option key={m} value={m}>{m.charAt(0).toUpperCase() + m.slice(1)}</option>)}
    </Select>
  </FilterDiv>
);

export default Filter;
