import { useEffect, useState } from "react"

const useToken = (user) => {
    console.log("user", user?.user.displayName)
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email

        const currentUser = {
            email: email,
            education: "None added",
            location: "None added",
            phoneNumber: "None added",
            linkedIn: "None added",   
        }
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.accessToken;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken)
                })
        }
    }, [user])
    return token;
}

export default useToken;