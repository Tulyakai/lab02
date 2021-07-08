app.component('product-details', {
    props: {
        details:{
            type:String,
            required:true
        }
    },
    template:
        /*html*/
        `
        <p>Detail:</p>
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
        ` 
})