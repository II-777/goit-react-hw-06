import React from 'react';
import { TbFilterSearch } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import css from './Stats.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const Stats = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const totalContactsCount = contacts.length;
  const visibleContactsCount = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  ).length;

  return (
    <div className={css.stats}>
      <ul className={css.statsList}>
        {!filter && (
          <li>
            <FaPeopleGroup size='24px' className={css.statsIcon}/> 
            Total contacts: {totalContactsCount}
          </li>
        )}
        {filter && (
          <li>
            <TbFilterSearch size='24px' className={css.statsIcon}/> 
            Search result: {visibleContactsCount}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Stats;
