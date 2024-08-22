import css from './SearchBox.module.css';

export default function Filter({ value, onFilter }) {
  return (
    <div className={css.SearchBox}>
      <p className={css.label}>Search contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={css.input} // Add this line to apply the input styles
      />
    </div>
  );
}