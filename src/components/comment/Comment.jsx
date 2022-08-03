import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../avatar/Avatar';
import styles from './Comment.module.css';

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <Avatar
                src="https://github.com/diego3g.png"
                hasBorder={false}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinicius Prata</strong>
                            <time
                                title="19 de Junho às 12:32"
                                dateTime="2022-06-19 11:32:00"
                            >Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}