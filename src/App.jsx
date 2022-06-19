import { Header } from './components/header/Header';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/sidebar/Sidebar';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          Author: Vinicius <br />
          Content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam maiores voluptas corporis distinctio iste ab numquam amet quod minus eius soluta, ipsa minima in quos, pariatur quidem facilis fugiat voluptatibus?.
        </main>

      </div>

    </div>
  );
}

