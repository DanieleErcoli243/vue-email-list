console.log("Vue Ok", Vue);

const {createApp} = Vue;

const app = createApp (
    {
        data: () => {

        }
    }
)

app.mount("#root");