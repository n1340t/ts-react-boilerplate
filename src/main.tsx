import React from 'react'; // we need this to make JSX compile
import ReactDOM from 'react-dom';

type CardProps = {
  title: string;
  paragraph: string;
};

function Card({ title, paragraph }: CardProps) {
  return (
    <aside>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </aside>
  );
}

const el = <Card title='Welcome! 123' paragraph='To this example' />;
const contentNode = document.getElementById('content');
ReactDOM.render(el, contentNode);

if (module.hot) {
  module.hot.accept((err: Error) => {
    console.log(err);
  });
}
