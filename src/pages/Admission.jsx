import React from 'react';
import AdmissionForm from '../components/AdmissionForm';

const Admission = () => {
    return (
        <div>
            <h1>Admission to SMP MAARIF NU DUKUHWARU</h1>
            <p>Welcome to the admission page of SMP MAARIF NU DUKUHWARU. We are excited to have you consider joining our school community.</p>
            <h2>Admission Process</h2>
            <p>To apply for admission, please follow the steps outlined below:</p>
            <ol>
                <li>Complete the online admission form.</li>
                <li>Submit the required documents.</li>
                <li>Attend the admission interview (if applicable).</li>
                <li>Wait for the admission decision.</li>
            </ol>
            <h2>Requirements</h2>
            <ul>
                <li>Copy of birth certificate</li>
                <li>Recent passport-sized photograph</li>
                <li>Previous school report card</li>
                <li>Recommendation letter (if applicable)</li>
            </ul>
            <h2>Deadlines</h2>
            <p>Please ensure that all applications are submitted by the following deadlines:</p>
            <ul>
                <li>First Round: [Insert Date]</li>
                <li>Second Round: [Insert Date]</li>
            </ul>
            <AdmissionForm />
        </div>
    );
};

export default Admission;