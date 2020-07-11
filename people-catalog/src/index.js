import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const People = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="People" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PeopleList = () => {
  return (
    <section className="person-list">
      <People img="34" name="Pratyush" job="developer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ex?
        </p>
      </People>
      <People img="24" name="Shivam" job="designer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ex?
        </p>
      </People>

      <People img="44" name="Himanshu" job="Manager">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ex?
        </p>
      </People>
      <People img="54" name="Umesh" job="tester">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ex?
        </p>
      </People>
    </section>
  );
};

ReactDOM.render(<PeopleList></PeopleList>, document.getElementById("root"));
