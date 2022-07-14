import styles from './styles.module.css';

export function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="23"
      fill="none"
      viewBox="0 0 52 23"
      className={styles.container}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
        d="M50.983 1.366c-9.515 8.583-24.882 13.23-36.569 10.495-2.836-.664-7.496-1.297-9.773-3.823-1.293-1.435-3.298-1.569-.778-2.792 2.075-1.007 5.084-2.67 7.342-2.67.816 0-7.17 2.656-9.627 3.338-3.142.87 7.471 13.087 9.19 15.232"
      ></path>
    </svg>
  );
}