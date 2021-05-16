import React from 'react'; // we need this to make JSX compile
import ReactDOM from 'react-dom';

type CardProps = {
  title: string;
  paragraph: string;
};

const Card = ({ title, paragraph }: CardProps) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </aside>
);

const el = <Card title="Welcome!" paragraph="To this example" />;
const contentNode = document.getElementById('content');
ReactDOM.render(el, contentNode);
