import React from "react";
import { profile } from "./ListDb";
import './List.css'

const ListRendering = () => {
    const profileList = profile.map((prof) => (
        <div key={prof.id} className="ProfileCard" style={{background: prof.gender == 'Male' ? 'red': 'Green'}}>
            <img src={prof.image} alt="" />
            <h2>{prof.username}</h2>
            <h2>{prof.position}</h2>
            <div>
                <h2>{prof.age}</h2>
                <h2>{prof.gender}</h2>
            </div>
        </div>
    ))
  return <div>
    <div className="Profile-content">{profileList}</div>
  </div>;
};

export default ListRendering;
