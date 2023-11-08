const apiUrl = process.env.BACKEND_URL;
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
     loggedInAs:null
    },
    actions: {
      login: async (email, password) => {
        try {
          let response = await fetch(apiUrl + "/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),
          });

          let data = await response.json();

          if (data) {
            console.log(data.token);
            sessionStorage.setItem("token", data.token);
            return true;
          }
        } catch (error) {
          console.log(error);
        }
      },

      signup: (email, password) => {
        fetch(apiUrl + "/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password }),
        })
          .then((response) => console.log("upload response: ", response.json()))
          .catch((error) => console.log(error));
      },

      logout: () => {
        sessionStorage.removeItem("token");
      },

	  goPrivate: async ()=> {
      try{
        let response = await fetch(apiUrl+"/api/private",{
        headers: {Authorization: `Bearer ${sessionStorage.getItem("token")}`}		
      })
      let data = await response.json()
      if (data && data != undefined) {
            setStore({loggedInAs:data.logged_in_as})
              console.log("congrats user "+data.logged_in_as+" you have access")
              return true;
            }

      }catch(error){
        console.log(error);
      }
		
	  },

    
    },
  };
};

export default getState;
