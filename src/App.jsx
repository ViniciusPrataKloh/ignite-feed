import styles from './App.module.css';
import { Header } from './components/header/Header';
import { Post } from './components/post/Post';
import { Sidebar } from './components/sidebar/Sidebar';
import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ViniciusPrataKloh.png',
      name: 'Vinicius Prata',
      role: 'Software developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare' },
      { type: 'link', content: '#NLW' },
    ],
    publishedAt: new Date('2022-07-28 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Software developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-22 02:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>

    </div>
  );
}

