app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews">
                {{ review.name }} gave this {{ review.rating }} stars
            <br/>
            "{{ review.review }}"
            <br/>
            Recommend: {{review.recommend}}
            </li>

        </ul>
    </div>`
})