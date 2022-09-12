import React from 'react';
import { TodoFiltered } from '../../types/TodoFiltered';

type Props = {
  query: string;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<TodoFiltered>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const TodoFilter:React.FC<Props> = ({
  query, filter, setQuery, setFilter,
}) => (
  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select
          data-cy="statusSelect"
          value={filter}
          onChange={
            ({ target }) => setFilter(target.value as TodoFiltered)
          }
        >
          <option value={TodoFiltered.NONE}>All</option>
          <option value={TodoFiltered.ACTIVE}>Active</option>
          <option value={TodoFiltered.COMPLETED}>Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      {query
        && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => setQuery('')}
            />
          </span>
        )}

    </p>
  </form>
);
