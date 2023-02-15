import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Profile = () => {
    const [isEditingName, setIsEditingName] = useState(false);
    const [newFirstName, setNewFirstName] = useState();
    const [newLastName, setNewLastName] = useState();
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.authReducer.firstName);
    const lastName = useSelector((state) => state.authReducer.lastName);
    const token = useSelector((state) => state.authReducer.token);

    const saveNewName = (e) => {
        e.preventDefault()

        fetch('http://localhost:3001/api/v1/user/profile', {
            
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                firstName: newFirstName,
                lastName: newLastName
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(authActions.updateName(data.body));
                setIsEditingName(false);
            })
            .catch((err) => console.log(err))
    }

    return (
        <main className="main bg-dark">

            <div className="header">

                {!isEditingName && <div>
                    <h1>Welcome back<br />{firstName} {lastName}</h1>
                    <button className="edit-button"
                        onClick={() => setIsEditingName(true)
                        }>Edit Name</button>
                </div>
                }
                {isEditingName && <div>
                    <h1>
                        Welcome back
                        <br />
                    </h1>
                    <div className="name-edit-container">
                        <input
                            className="edit-input"
                            type="firstname"
                            id="firstname"
                            placeholder={firstName}
                            onChange={(e) => {
                                setNewFirstName(e.target.value);
                            }}
                        />
                        <input
                            className="edit-input"
                            type="lastname"
                            id="lastname"
                            placeholder={lastName}
                            onChange={(e) => {
                                setNewLastName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="edit-buttons-container">
                        <button className="edit-name-button" onClick={saveNewName}   >
                            Save
                        </button>
                        <button
                            className="edit-name-button"
                            onClick={() => setIsEditingName(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>}


            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    )
}

export default Profile