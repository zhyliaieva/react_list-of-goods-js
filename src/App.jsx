import { useState } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

export const buttons = [
  { id: 'name', value: 'Sort alphabetically', class: 'is-info' },
  { id: 'length', value: 'Sort by length', class: 'is-success' },
  { id: 'reverse', value: 'Reverse', class: 'is-warning' },
  { id: 'reset', value: 'Reset', class: 'is-danger' },
];

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const GoodList = ({ goods }) => (
  <ul className="GoodList">
    {goods.map(good => (
      // eslint-disable-next-line prettier/prettier
        <li
          key={good}
          data-cy="Good"
          className="Good"
        >
        {good}
      </li>
    ))}
  </ul>
);

export const App = () => {
  const [sortField, setSortField] = useState('');
  const visibleGoods = [...goodsFromServer].sort((good1, good2) => {
    switch (sortField) {
      case 'length':

        return good1.length - good2.length;
      case 'name':
        return good1.localeCompare(good2);
      case 'reverse':

      case 'reset':

    }
  });

  return (
    <div className="section content">
      <div className="buttons">
        {buttons.map(butt => (
          <button
            type="button"
            key={butt.id}
            className={classNames(butt.class, {
              'is-light': sortField !== butt.id,
            })}
            onClick={() => setSortField(butt.id)}
          >
            {butt.value}
          </button>
        ))}
      </div>

      <GoodList goods={visibleGoods} />
    </div>
  );
};
