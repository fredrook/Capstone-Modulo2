class Api {
    static url = 'https://habits-kenzie.herokuapp.com/api/userLogin'
    static token = JSON.parse(localStorage.getItem("token"))

    static async loginUser(data) {
       return await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                localStorage.setItem("usr_name", JSON.stringify(res.response.usr_name))
                localStorage.setItem("usr_img", JSON.stringify(res.response.usr_image))
                localStorage.setItem("token", JSON.stringify(res.token))
                if (res.token) {
                    window.location.href = "./src/views/homepage.views.html"
                } 

                return res
            })
            .catch(err => err)
    }

    static async updateProfile(profile) {
        return  await fetch(`https://habits-kenzie.herokuapp.com/api/user/profile`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
                body: JSON.stringify(profile),
            }).then((res) => res.json())
            .then(res => {
                console.log(res)
                localStorage.setItem("usr_img", JSON.stringify(res.usr_image))
            })
            .catch(err => console.log(err))

    }

    static async createHabit(data) {
        return await fetch("https://habits-kenzie.herokuapp.com/api/habits", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    
    static async readAll() {
        const response = await fetch(`https://habits-kenzie.herokuapp.com/api/habits`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                }
            })
            .then((res) => res.json())
            .catch((err) => console.log(err));

        return response
    }

    static async readByCategory() {
        return await fetch(`https://habits-kenzie.herokuapp.com/api/habits/category/:habit_category`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
            })
            .then((res) => res.json())
            .then(res => {
                console.log(res)
                return res;
            })
            .catch(err => console.log(err))
    }

    static async updateHabit(data, id) {
        return await fetch(`https://habits-kenzie.herokuapp.com/api/habits/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .catch(err => console.log(err))

    }

    static async completeHabit(status, id) {
        return await fetch(`https://habits-kenzie.herokuapp.com/api/habits/complete/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
                body: JSON.stringify(status),
            })
            .then((res) => res.json())
            .then(res => {
                console.log(res)
                return res;
            })
            .catch(err => console.log(err))

    }

    static async deleteHabit(id) {
        return await fetch(`https://habits-kenzie.herokuapp.com/api/habits/${id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
            })
            .then((res) => res.json())
            .then((res) => res)
            .catch((err) => console.log(err));
    }
}

export {Api} 