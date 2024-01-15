import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

export default function ProjectComments({ project }) {

    const { updateDocument, response } = useFirestore('projects');
    const [newComment, setNewComment] = useState('');
    const { user } = useAuthContext();

    const handleSubmit = async event => {
        event.preventDefault();

        const commentsToAdd = {
            displayName: user.displayName,
            photoURL: user.photoURL,
            content: newComment,
            createdAt: timestamp.fromDate(new Date()),
            id: Math.random()
        };

        await updateDocument(project.id, {
            comments: [...project.comments, commentsToAdd]
        });

        if (!response.error) {
            setNewComment('');
        };
    }

    return (
        <div className="project-comments">
            <h4>Project Comments</h4>
            <form className="add-comment" onSubmit={handleSubmit}>
                <label>
                    <span>Add new comment:</span>
                    <textarea
                    required
                    onChange={event => setNewComment(event.target.value)}
                    value={newComment}
                    ></textarea>
                </label>
                <button className="btn">Add comment</button>
            </form>
        </div>
    )
};
