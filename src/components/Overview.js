import React from "react";

// utils
import Card from '../utils/Card.js';
import { Input, Submit} from '../utils/Form.js';



const Overview = ({ user, onSubmit, onChange }) => (
  <Card title="Mein Profil">
    <form className="card-content" onSubmit={(e) => e.defaultPrevented()} action="/">
      
      <Input />
      <h5>Kurzbeschreibung:</h5>
      <Input />
      <h5>Tags:</h5>
      <Input />
      <h5>Bild:</h5>
      <Input />
      <h5>Artikel:</h5>
      <Input />
      <Submit />
    </form>
  </Card>
)


export default Overview
