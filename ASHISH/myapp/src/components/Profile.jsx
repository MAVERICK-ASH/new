import React from 'react';

const Profile = () => {
    const student = {
        name: 'Ashish',
        age: 20,
        major: 'Computer Science',
        university: 'KTU',
        email: 'asishm2004@gmail.com',
        profilePicture: 'https://resizing.flixster.com/-1N2PWYxUFGd62SHCoasGYtInLo=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/170054_v9_bb.jpg',
    };

    return (
        <div style={styles.container}>
            <img
                src={student.profilePicture}
                alt={`${student.name}'s profile`}
                style={styles.profileImage}
            />
            <h1 style={styles.name}>{student.name}</h1>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Major:</strong> {student.major}</p>
            <p><strong>University:</strong> {student.university}</p>
            <p><strong>Email:</strong> {student.email}</p>
        </div>
    );
};

const styles = {
    container: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '400px',
        margin: '16px auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
    },
    profileImage: {
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        objectFit: 'cover', // Ensures the image fits nicely
        marginBottom: '16px',
    },
    name: {
        color: '#333',
        marginBottom: '8px',
    },
};

export default Profile;
