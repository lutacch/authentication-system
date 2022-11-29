
export const signUpPost = async (user, pass) => {
    const response = await fetch(
        "https://3001-lutacch-authentications-e2zacrakn5i.ws-eu77.gitpod.io/",
        {
            method: "POST",
            body: JSON.stringify({email:user, password: pass})
        }
    )
    if (response.status === 201){
        return "User registered"
    }
    throw new Error("error in registration")
};