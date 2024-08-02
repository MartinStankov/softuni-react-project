import { Link } from "react-router-dom";

export default function ErrorPage() {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '89.4vh',
            textAlign: 'center',
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(184,0,255,1) 66%)',
        },
        content: {
            maxWidth: '400px',
            padding: '20px',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
        },
        heading: {
            fontSize: '3em',
            marginBottom: '10px',
        },
        paragraph: {
            fontSize: '1.2em',
            marginBottom: '20px',
            color: 'black',
        },
        link: {
            textDecoration: 'none',
            color: '#007BFF',
            fontWeight: 'bold',
            fontSize: '1.2em',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.heading}>404</h1>
                <p style={styles.paragraph}>Oops! Looks like the page you're looking for doesn't exist.</p>
                <Link to="/" style={styles.link}>Go Back to Home</Link>
            </div>
        </div>
    );
};