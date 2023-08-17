import { KeyboardEvent, SyntheticEvent } from 'react';

/* eslint-disable-next-line */
export interface SearchProps {}

export function Search(props: SearchProps) {
  function search(event: SyntheticEvent<HTMLInputElement>) {
    console.log((event.target as HTMLInputElement).value);
  }

  return <input type="search" placeholder="Search" onClick={search}></input>;
}

export default Search;
