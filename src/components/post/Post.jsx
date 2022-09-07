import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comment/Comment';
import styles from './Post.module.css';


export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        { "id": "1", "comment": "Muito bacana!!!" },
        { "id": "2", "comment": "Fera demaaaais!!!" }
    ]);

    let keyContent = 0;

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    // const newCommentText = (handleFormSubmit(e)) => {

    // }

    function handleCreateNewComment(e) {
        event.preventDefault();
        console.log(e.target.inputComment.value);
        setComments([...comments, {
            "id": comments.length + 1,
            "comment": e.target.inputComment.value
        }]);
    }

    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >{publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    keyContent++;
                    if (line.type === 'paragraph') {
                        return (
                            <p key={keyContent}>{line.content}</p>
                        );
                    } else {
                        return (
                            <a key={keyContent} href='#'>{line.content}</a>
                        );
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong className={styles.commentFormStrong}>Deixe seu feedback</strong>

                <textarea name="inputComment" placeholder="Deixe um comentário" />

                <footer className={styles.commentFormFooter}>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            {
                comments.map(comment => {
                    return (
                        <Comment key={comment.id} content={comment.comment} />
                    );
                })
            }

        </article >
    );
}