console.log("Vue Ok", Vue);

// Indirizzo per fare la chiamata
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail"

const {createApp} = Vue;

const app = createApp (
    {
        data: () => ({
            addresses: []
            
        }),
        methods:{
            getRandomAddress() {
                for (let i = 0; i < 10; i++) {
                    axios.get(endpoint).then((res) => {
                        this.addresses.push(res.data.response);
                        console.log(res.data.response);
                    })
                }
            }
        },
        created() {
            this.getRandomAddress();
        }
    },
)


app.mount("#root");