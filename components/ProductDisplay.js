app.component('product-display', {
    props:{
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
        /*html*/
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" :class="{ out: !inStock}"/>
                </div>   
                <div class="product-info">
                    <h3 v-if="inStock">{{ displayOnSale }}</h3>
                    <h1>{{ title }}</h1>
                    <product-details :details='details'></product-details>

                    <p v-if="inStock">Instock</p>
                    <p v-else>Out of Stock</p>
                    <p>Shipping {{shipping}}</p>

                    <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color }">
                    </div>

                    <button class="button" :class="{ disabledButton: !inStock}" :disabled="!inStock" @click="addToCart">Add to Cart</button>
                    <button class="button" :class="{ disabledButton: !inStock}" :disabled="!inStock" @click="popCart">Remove</button>
    
                </div>
            </div>
        </div>`,
        data() {
            return{
                product: 'Shoes',
                brand: 'SE331',
                inventory: 100,
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants: [
                    { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                    { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
                ],
                selectedVariant: 0,
                activeClass: true        
            }
        },
        methods: {
            addToCart() {
                this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
            },
            popCart() {
                this.$emit('remove-item')
            },
            updateImage(variantImage) {
                this.image = variantImage
            },
            updateVariant(index) {
                this.selectedVariant = index
            }
        },
        computed: {       
            title() {
                return this.brand + ' ' + this.product 
            },
            image() {
                return this.variants[this.selectedVariant].image
            },
            inStock() {
                return this.variants[this.selectedVariant].quantity
            },
            displayOnSale() {
                return this.brand + ' ' + this.product + ' is on sale'
            },
            shipping() {
                if (this.premium) {
                    return 'Free'
                }
                return 30
            }
        },
})

