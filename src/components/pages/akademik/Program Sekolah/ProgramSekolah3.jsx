import React from "react";
import DetailProgramSekolah from "../../../layouts/DetailProgramSekolah";

const ProgramSekolah3 = () => {
  const programData = {
    title: "Program Sekolah 3",
    image: "/sdsmerpati/images/hero2.jpg",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa iste esse adipisci officia ut in earum at hic odit minima, consectetur id? Sit ea odio fugit cum qui sunt doloribus rem sint consequatur voluptatum perferendis ducimus minima itaque incidunt eos dicta tempore corrupti dolorum reiciendis commodi, non officia repudiandae, saepe ut? Id maxime voluptatum fugit quod consequatur aliquam, autem sit reprehenderit dolor accusantium, saepe amet sed reiciendis repudiandae commodi cum facilis assumenda est earum fugiat! Qui perferendis, eos maiores sed sequi architecto aspernatur quas adipisci, veritatis rerum molestias nam. Quas iure veniam exercitationem nostrum in quae nisi possimus quam?",
    relatedPrograms: [
      {
        title: "Program Sekolah Sehat",
        link: "../programsekolah/programsekolah1",
      },
      {
        title: "Program Ekstrakurikuler",
        link: "../programsekolah/programsekolah2",
      },
      {
        title: "Program Pembiasaan Karakter",
        link: "../programsekolah/programsekolah4",
      },
      {
        title: "Program Pembiasaan Karakter",
        link: "../programsekolah/programsekolah5",
      },
      {
        title: "Program Pembiasaan Karakter",
        link: "../programsekolah/programsekolah6",
      },
    ],
  };

  return <DetailProgramSekolah {...programData} />;
};

export default ProgramSekolah3;
