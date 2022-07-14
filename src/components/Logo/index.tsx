import styles from './styles.module.css';

export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="116"
      height="65"
      fill="none"
      viewBox="0 0 116 65"
      className={styles.container}
    >
      <path
        fill="currentColor"
        d="M14.517 50.109H7.281V7.146H0V0h43.506v7.146H14.517v42.963zm28.989 14.335H36.27V53.681l-3.618-3.572h-3.663v14.335H0v-7.19h21.753V14.336h21.753v28.627l-3.618 3.573 3.618 3.573v14.335zM32.652 42.963l3.618-3.573V21.481h-7.281v21.482h3.663zM57.977 50.153h-7.235V0h7.235v50.153zm0 14.291h-7.235V57.3h7.235v7.145zM86.966 64.444H65.213V0h21.753v42.963l-3.618 3.573 3.618 3.617v14.291zM76.067 42.963l3.663-3.573V7.19h-7.28v35.773h3.617zm3.663 14.336v-3.573l-3.663-3.573H72.45V57.3h7.281zM116 50.153H94.247V0H116v50.153zm-7.236-7.19V7.19h-7.281v35.773h7.281zM116 64.444H94.247V57.3H116v7.145z"
      ></path>
    </svg>
  );
};
