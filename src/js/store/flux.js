const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "http://127.0.0.1:5000",
			user: {
				name: "",
				email: "",
				password: "",
				type_of_user: ""
			},
			token: sessionStorage.getItem("Token"),
			events:[],
			event: {
				event_name: "",
				local_name: "",
				type_of_event: "",
				description: "",
				place: "",
				date: "",
				start_time: "",
				end_time: "",
				age: "",
				parking: "",
				number: "",
				capacity: "",
				photo: "",
				location: "",
				cover: "",
				email: ""
			}
		},

		actions: {
			createUser: async (user) => {
				const store = getStore();
				const response = await fetch(
					`${store.baseURL}/signup`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(user)
					}
				);
				const body = await response.json();
				if (!response.ok) {
					alert(`Fallo el Registro: ${response.status}: ${body.msg}`);
					return false
				}
				else {
					return true
				}
			},

			logInUser: async (logUser) => {
				const store = getStore();
				const response = await fetch(
					`${store.baseURL}/login`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(logUser)
					}
				)
				const userToken = await response.json();
				if (!response.ok) {
					alert(`Fallo el logIN: ${response.status}: ${userToken.msg}`);
					return false
				}
				else {
					sessionStorage.setItem("Token", userToken)
					setStore({
						token: userToken
					})
					return true
				}
			},

			deleteToken: () => {
				// const store = getStore()
				sessionStorage.removeItem("Token")
				setStore({
					token: ""
				})
			},

			getUser: async () => {
				const store = getStore();
				const response = await fetch(
					`${store.baseURL}/private`,
					{
						method: "GET",
						headers: {
							"Authorization": `Bearer ${store.token}`,
						},
					}
				);
				const body = await response.json();
				setStore({
					user: body,
				});
			},

			createEvent: async (event) => {
				const store = getStore();
				const response = await fetch(
					`${store.baseURL}/event`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(event)
					}
				);
				const body = await response.json();
				if (!response.ok) {
					alert(`Fallo la creacion de evento: ${response.status}: ${body.msg}`);
					return false
				}
				else {
					return (true)
				}
			},

			getEvents: async () => {
				const store = getStore();
				const response = await fetch(
					`${store.baseURL}/events`,
				);
				const body = await response.json();
				setStore({
					events: body,
				});
			},
		}
	};
};

export default getState;
