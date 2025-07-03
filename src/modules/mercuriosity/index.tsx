import Banner from "../../components/banner";
import BannerImg from '/assets/images/landing-pic.jpeg';
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";
import Helmet from "../../components/helmet";
import React, { useEffect, useState } from "react";
import MercuriositiesList from "./MercuriositiesListStyled";


import Filter from "./filter";

const Mercuriosity: React.FC = () => {
  const [curiosities, setCuriosities] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | "">("");
  const [selectedMonth, setSelectedMonth] = useState<string | "">("");

  useEffect(() => {
    fetch("/assets/data/mercuriosities.json")
      .then((res) => res.json())
      .then((data) => {
        setCuriosities(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    let result = curiosities;
    if (selectedYear) result = result.filter((c: any) => c.year === selectedYear);
    if (selectedMonth) result = result.filter((c: any) => c.month === selectedMonth);
    setFiltered(result);
  }, [curiosities, selectedYear, selectedMonth]);

  const years = Array.from(new Set(curiosities.map((c: any) => c.year))).sort();
  const months = Array.from(new Set(curiosities.map((c: any) => c.month)));

  return (
    <>
      <Helmet title="Mercurius Aalst | Mercuriosity" />
      <div>
        <Banner imgUrl={BannerImg} />
        <OuterSec>
          <InnerDiv>
            <Title color="--white" text="Mercuriosity" />
            <Filter
              years={years}
              months={months}
              selectedYear={selectedYear}
              selectedMonth={selectedMonth}
              onYearChange={setSelectedYear}
              onMonthChange={setSelectedMonth}
            />
            <MercuriositiesList curiosities={filtered} />
          </InnerDiv>
        </OuterSec>
      </div>
    </>
  );
};

export default Mercuriosity;
