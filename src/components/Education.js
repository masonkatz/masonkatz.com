import React from 'react';
import { Degree } from '../components/Resume';

export const Education = ({ data }) => (
  <>
    {data.map((d) => (
      <Degree
        date={d.date}
        school={d.school}
        major={d.major}
        degree={d.degree}
      />
    ))}
  </>
);
