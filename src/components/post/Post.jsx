import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState, FormEvent } from 'react';
import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comment/Comment';
import styles from './Post.module.css';


export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState(["Muito bacana!!!"]);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment(e) {
        e.preventDefault();

        setComments([...comments, newCommentText]);

        setNewCommentText('');
    }

    function handleNewCommentChange(e) {
        e.target.setCustomValidity('');
        setNewCommentText(e.target.value);
    }

    function handleNewCommentInvalid(e) {
        e.target.setCustomValidity("Esse campo é obrigatório");
    }

    function deleteComment(commentToDelete) {
        const commentsAfterDeleteOne = comments.filter(comment => {
            return comment != commentToDelete;
        });
        setComments(commentsAfterDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0;

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
                    if (line.type === 'paragraph') {
                        return (
                            <p key={line.content}>{line.content}</p>
                        );
                    } else {
                        return (
                            <a key={line.content} href='#'>{line.content}</a>
                        );
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong className={styles.commentFormStrong}>Deixe seu feedback</strong>

                <textarea
                    name="inputComment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer className={styles.commentFormFooter}>
                    <button
                        type="submit"
                        disabled={isNewCommentEmpty}
                    >
                        Publicar</button>
                </footer>
            </form>

            {
                comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    );
                })
            }

        </article >
    );
}