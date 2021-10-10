import React, { Component, useState, useEffect } from 'react'
import CardProduct from './CardProduct';

const listOfProduct = [
    { prodId: 1, name: "Asus", price: 1500, likes: 10 },
    { prodId: 2, name: "Dell", price: 2500, likes: 5 },
    { prodId: 3, name: "Macbook", price: 3000, likes: 4 }
]



 export default class ProductList extends Component {
    state = { products: listOfProduct }

    onLikes = (id) => {
        console.log("id:" + id);

        this.setState({
            products: [...this.state.products.map(prod => {
                if (id === prod.prodId) {
                    prod.likes = prod.likes + 1
                    return prod;
                } else {
                    return prod;
                }
            })
            ]
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.products &&
                        this.state.products.map(prod => {
                            return (

                                <CardProduct
                                    prodId={prod.prodId}
                                    name={prod.name}
                                    price={prod.price}
                                    likes={prod.likes}
                                    onLikes={this.onLikes}
                                />

                            )
                        })
                    }
                </ul>
            </div>
        )
    }
} 