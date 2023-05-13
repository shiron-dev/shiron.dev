import React from "react";

interface Props {
  category: string;
  skills: string[];
}

export const SkillStack = (props: Props): JSX.Element => {
  return (
    <div>
      <h5 className="text-3xl">{props.category}</h5>
      {props.skills.map((skill) => (
        <div className="text-2xl ml-8 my-2">{skill}</div>
      ))}
    </div>
  );
};
