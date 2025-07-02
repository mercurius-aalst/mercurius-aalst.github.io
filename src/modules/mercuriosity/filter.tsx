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
  gap: 1.2rem;
  margin-bottom: 2rem;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
  border-radius: 2.5rem;
  padding: 0.5rem 0 0.5rem 0.2rem;
  box-shadow: none;
`;

const Select = styled.select`
  font-size: 1.08rem;
  padding: 0.55rem 2.1rem 0.55rem 1.1rem;
  border-radius: 2em;
  background-color: #fff;
  border: 1.5px solid #b5b5b5;
  color: var(--black);
  outline: none;
  font-weight: 500;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  transition: border 0.2s, box-shadow 0.2s;
  margin-right: 0.5rem;
  &:focus {
    border: 1.5px solid var(--green);
    box-shadow: 0 2px 12px rgba(26,127,90,0.08);
  }
`;

const Label = styled.label`
  font-size: 1.08rem;
  color: var(--green);
  font-weight: 600;
  margin-right: 0.3rem;
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
