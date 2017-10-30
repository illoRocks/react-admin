import React from "react";

// utils
import Card from '../utils/Card.js';
import {Input, Label, Submit} from '../utils/Form.js';



const PostForm = ({ user, onSubmit, onChange }) => (
  <Card title="Neuer Beitrag erstellen">
    <form className="card-content" onSubmit={(e) => e.defaultPrevented()} action="/">
      <h5>Titel:</h5>
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


export default PostForm
